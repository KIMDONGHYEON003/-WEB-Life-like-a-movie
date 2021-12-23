from rest_framework import serializers
from .models import Review, Comment
from django.contrib.auth import get_user_model


class ReviewListSerializer(serializers.ModelSerializer):

    class UsernameSerializer(serializers.ModelSerializer):
        class Meta:
            model = get_user_model()
            fields = ('username',)
    
    user = UsernameSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('id', 'title', 'movie', 'user', 'created_at', 'updated_at')
        read_only_fields = ('user',)


class CommentSerializer(serializers.ModelSerializer):

    class UsernameSerializer(serializers.ModelSerializer):
        class Meta:
            model = get_user_model()
            fields = ('username',)
    
    user = UsernameSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'content', 'review', 'user', 'created_at', 'updated_at')
        read_only_fields = ('review', 'user')


class ReviewSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(
        many=True,
        read_only=True,
    )

    comment_count = serializers.IntegerField(
        source='comment_set.count',
        read_only=True,
    )

    class UsernameSerializer(serializers.ModelSerializer):
        class Meta:
            model = get_user_model()
            fields = ('username',)
    
    user = UsernameSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('id', 'title', 'content', 'created_at', 'updated_at', 'comment_set', 'comment_count', 'rank', 'movie', 'user')