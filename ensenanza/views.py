import os
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.views import generic
from django.views.generic.base import View
from django.contrib.auth.models import Group
from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import check_password
from django.contrib import messages
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

        user = authenticate(username=username, password=password)

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
            if User.objects.filter(username=username).exists():
                args["error_message"] = "Username Already Exists. Please Try Again."
                return render(request, template_name, args)
            elif User.objects.filter(email=email).exists():
                args["error_message"] = "Email Already Exists. Please Try Again."
                return render(request, template_name, args)
            else:
                user = User.objects.create_user(username=username, password=password1, email=email,
                                                first_name=first_name, last_name=last_name)
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


class Syllabus(View):

    def get(self, request):
        return render(request, 'syllabus.html')


class Tests(View):

    def get(self, request):
        return render(request, 'tests.html')


#######View Profile#######
class viewProfile(View):
    def get(self, request, template_name="viewProfile.html"):
        if request.user:
            return render(request, template_name)
        else:
            return render(request, "login.html")


class editProfile(View):
    def get(self, request, template_name='editProfile.html'):
        return render(request, template_name)

    def post(self, request, template_name='editProfile.html'):
        user = request.user
        student = user.student
        board = request.POST.get('board')
        acadYear = request.POST.get('acadYear')
        try:
            student.board = board
            student.acadYear = acadYear
            student.save()
        except:
            err = {}
            err["error_message"] = "Edit Unsuccessful."
            return render(request, template_name, err)
        err = {}
        err["error_message"] = "Profile Edited Successfully."
        return render(request, template_name, err)

# Change password
class resetPassword(View):

    def get(self, request, template_name="changepassword.html"):
        return render(request, template_name)

    def post(self, request, template_name="changepassword.html"):
        currPassword = request.POST.get('currentPassword')
        newPassword = request.POST.get('newPassword')
        confPassword = request.POST.get('reNewPassword')

        try:
            matchcheck = check_password(currPassword, request.user.password)
            if matchcheck is False:
                err = {}
                err["error_message"] = "Entered Current Password is Incorrect. Please Retry."
                return render(request, template_name, err)
            if newPassword != confPassword:
                err = {}
                err["error_message"] = "Entered New Passwords don't Match. Please Retry."
                return render(request, template_name, err)
        except:
            err = {}
            err["error_message"] = "Refresh the Page to change the Password Again."
            return render(request, template_name, err)

        # U = User.objects.get(username=request.user.username)
        U = request.user
        U.set_password(newPassword)
        U.save()
        update_session_auth_hash(request, U)
        err = {}
        # err["student"] = stud
        err["error_message"] = "Password changed successfully."
        return render(request, 'viewProfile.html', {'student': request.user.student})