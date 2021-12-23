from django.urls import path
from . import views


urlpatterns = [
    path('reviews/', views.review_list_create),
    path('reviews/<int:review_pk>/', views.review_detail_update_delete),
    path('reviews/<int:review_pk>/comments/', views.create_list_comment),
    path('personalreviews/', views.personalreview_list),

   
    path('comments/', views.comment_list),
    path('reviews/<int:review_pk>/comments/<int:comment_pk>/', views.comment_detail_update_delete),
]