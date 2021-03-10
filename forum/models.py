from django.db import models
from django.contrib.auth.models import User
from django.db.models import OneToOneField


class student(models.Model):
    user: OneToOneField = models.OneToOneField(User, on_delete=models.CASCADE)
    acadYear = models.CharField(max_length=100)
    medium = models.CharField(max_length=100)
    board = models.CharField(max_length=100, default="SSC")
    
    def __str__(self):
        return self.user.first_name +" "+ self.user.last_name


class question(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    questionBy = models.ForeignKey(student, on_delete=models.CASCADE)
    title = models.CharField(max_length=240)
    body = models.CharField(max_length=25000)
    medium = models.CharField(max_length=100)
    acadYear = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    board = models.CharField(max_length=100, default="SSC")

    def __str__(self):
        return self.title


class answer(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    whichQuestion = models.ForeignKey(question, on_delete=models.CASCADE)
    answerBy = models.ForeignKey(student, on_delete=models.CASCADE)
    body = models.CharField(max_length=30000)
    isCorrect = models.BooleanField(default=False)

    def __str__(self):
        return self.whichQuestion.title + ": " + self.answerBy.user.first_name + " " + self.answerBy.user.last_name
