from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny

User = get_user_model()


@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    password = request.data.get('password')
    password_confirmation = request.data.get('passwordConfirmation')

    if password != password_confirmation:
        return Response({'error': '비밀번호가 일치하지 않습니다.'})
    
    if User.objects.filter(username=request.data.get('username')).exists():
        return Response({'error': '사용할 수 없는 아이디입니다.'})

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        user.set_password(password)
        user.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)