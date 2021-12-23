from django.db import models
from django.conf import settings

# Create your models here.

# 프론트에서 영화는 입력할 수 있도록 할 것!
# class ReviewMovie(models.Model):
#     title = models.CharField(max_length=100)

#     def __str__(self):
#         return self.title


class Review(models.Model):
    RANKS = [
        (1, '★'),
        (2, '★★'),
        (3, '★★★'),
        (4, '★★★★'),
        (5, '★★★★★'),
    ]
    movie = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    content = models.TextField()
    rank = models.IntegerField(choices=RANKS, default=5)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reviews')
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_reviews')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='review_comments')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user}가 작성한 {self.content}입니다.'