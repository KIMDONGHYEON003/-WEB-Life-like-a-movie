from django.shortcuts import get_object_or_404, get_list_or_404

from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework import status

# 토큰의 유효성 여부와는 관계없이 인증이 되었는지 여부만 체크
from rest_framework.permissions import IsAuthenticated
# 우리가 발급 받은 토큰이 유효한지 여부를 체크
from rest_framework_simplejwt.authentication import JWTAuthentication


from .models import Review, Comment
from .serializers import ReviewListSerializer, ReviewSerializer, CommentSerializer



@api_view(['GET', 'POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def review_list_create(request):
    # GET 요청이면
    if request.method == 'GET':
        reviews = Review.objects.order_by('-pk')
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)
    # POST 요청이면
    else:
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)   
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def personalreview_list(request):
    reviews = request.user.reviews
    serializer = ReviewListSerializer(reviews, many=True)
    return Response(serializer.data)



@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def review_detail_update_delete(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    if request.method == 'GET':
        # article.comment_set.count() -> 해당 게시글에 달려있는 댓글 개수
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    elif request.method == 'PUT':
        if not request.user.reviews.filter(pk=review_pk).exists():
            return Response({'detail': '권한이 없습니다.'}, status=status.HTTP_403_FORBIDDEN)
        
        else:
            serializer = ReviewSerializer(instance=review, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
    else:
        if not request.user.reviews.filter(pk=review_pk).exists():
            return Response({'detail': '권한이 없습니다.'}, status=status.HTTP_403_FORBIDDEN)

        else:
            review.delete()
            return Response({ 'id': review_pk }, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def create_list_comment(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    if request.method == 'GET':
        comments = Comment.objects.filter(review=review)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    else:
        serializer = CommentSerializer(data=request.data)
        # print(request.data) # <QueryDict: {'content': ['댓글 작성']}>
        if serializer.is_valid(raise_exception=True):
            # https://www.django-rest-framework.org/api-guide/serializers/#passing-additional-attributes-to-save
            serializer.save(user=request.user, review=review)   
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def comment_list(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def comment_detail_update_delete(request, review_pk, comment_pk):
    review = get_object_or_404(Review, pk=review_pk)
    comment = Comment.objects.filter(review=review, pk=comment_pk)[0]
    # print(comment not in request.user.comments.filter(user=request.user))
    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    elif request.method == 'PUT':      
        serializer = CommentSerializer(instance=comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    else:
        if comment not in request.user.comments.filter(user=request.user):
            return Response({'detail': '권한이 없습니다.'}, status=status.HTTP_403_FORBIDDEN)
        else:
            comment.delete()
            return Response({ 'id': comment_pk }, status=status.HTTP_204_NO_CONTENT)
    return


