import os
from django.contrib.auth import authenticate, login, logout
from django.views import generic
from django.views.generic.base import View
from django.contrib.auth.models import Group
from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from forum.models import answer, question, student


class landingPage(View):

    def get(self, request, template_name='landingPage.html'):
        return render(request, template_name)

class Login(View):
    
    def get(self, request, template_name='login.html'):
        return render(request, template_name)
    
    def post(self, request, template_name='login.html'):
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password = password)

        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            args = {}
            args["error_message"] = "Invalid Credentials. Please Try Again."
            return render(request, template_name, args)
        
class register(View):
    
    def get(self, request, template_name='register.html'):
        return render(request, template_name)
    
    def post(self, request, template_name='register.html'):
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        email = request.POST['email']
        medium = request.POST['medium']
        acadYear = request.POST['acadYear']
        board = request.POST['board']
        args = {}
        
        if password1 == password2:
            if User.objects.filter(username = username).exists():
                args["error_message"] = "Username Already Exists. Please Try Again."
                return render(request, template_name, args)
            elif User.objects.filter(email = email).exists():
                args["error_message"] = "Email Already Exists. Please Try Again."
                return render(request, template_name, args)
            else:
                user = User.objects.create_user(username = username, password = password1, email = email, first_name = first_name, last_name = last_name)
                user.save()
                newStudent = student(user=user, medium=medium, acadYear=acadYear, board=board)
                newStudent.save()
                args["error_message"] = "Successfully Registered. Please Login."
                return redirect('Login')
                
        else:
            args["error_message"] = "Passwords Don't Match. Please Try Again."
            return render(request, template_name, args)
        
def Logout(request):
    logout(request)
    return redirect('/')