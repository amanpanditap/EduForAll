from django.contrib import admin
from django.urls import path,include
from forum import views

app_name = 'forum'

urlpatterns = [
    path('',views.forumLanding.as_view(),name='forumLanding'),
    path('ask',views.addQuestion.as_view(),name='addQuestion'),
    path('question/<int:id>',views.queAns.as_view(),name='queAns'),
    path('myquestions',views.myQuestions.as_view(),name='myQuestions'),
]