from django.shortcuts import render
from django.views import View
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from forum.models import answer, question, student
from django.urls import reverse_lazy
# Create your views here.

#contains all questions sorted by latest first
class forumLanding(View):
    def get(self, request, template_name='forumLanding.html'):
        message = {}
        message['questions']=question.objects.all().order_by('-created')
        return render(request,'forumLanding.html',message)

    def post(self, request, template_name='forumLanding.html'):
        medium = request.POST.get('medium')
        board = request.POST.get('board')
        acadYear = request.POST.get('acadYear')
        subject = request.POST.get('subject')
        Questions = question.objects.filter(acadYear=acadYear,medium=medium,subject=subject,board=board)
        Questions = Questions.order_by('-created')
        message = {}
        message['questions']= Questions
        return render(request,template_name,message)

#display particular question and all answers to it
class queAns(View):
    def get(self, request, id, template_name='queAns.html'):
        message = {}
        Question = question.objects.filter(id=id)
        Question = Question[0]
        message['question']=Question
        answers = answer.objects.filter(whichQuestion=Question)
        answers = answers.order_by('-created')
        message['answers']=answers
        return render(request,template_name,message)

#ask a question
class addQuestion(View):

    def get(self, request, template_name='addQuestion.html'):
        if request.user.is_anonymous:
            return redirect('Login')
        return render(request,template_name)

    def post(self, request, template_name='addQuestion.html'):
        if request.user.is_anonymous:
            return redirect('Login')
        try:
            questionBy = student.objects.filter(user=request.user)
            questionBy = questionBy[0]
            title = request.POST.get('title')
            body = request.POST.get('body')
            medium = request.POST.get('medium')
            acadYear = request.POST.get('acadYear')
            subject = request.POST.get('subject')
            Question = question(questionBy=questionBy,title=title,body=body,medium=medium,acadYear=acadYear,subject=subject)
            Question.save()
            #return redirect(queAns)
        except:
            message = {}
            message['error_message']='Something went wrong, try again.'
            #message['questions']=question.objects.all().order_by('-created')
            return render(request,template_name,message)
        return redirect('forum:forumLanding')

#answer a question
class addAnswer(View):

    def get(self, request, id, template_name='addAnswer.html'):
        if request.user.is_anonymous:
            return redirect('Login')
        message = {}
        message['question']=question.objects.filter(id=id)[0]
        return render(request,template_name,message)
    
    def post(self, request, id, template_name='addAnswer.html'):
        if request.user.is_anonymous:
            return redirect('Login')
        try:
            body = request.POST.get('body')
            answerBy = student.objects.filter(user=request.user)
            print(answerBy)
            answerBy = answerBy[0]
            whichQuestion = question.objects.filter(id=id)
            whichQuestion = whichQuestion[0]
            Answer = answer(whichQuestion=whichQuestion,answerBy=answerBy,body=body)
            Answer.save()
        except:
            message = {}
            message['error_message'] = 'Something went wrong, try again.'
            #message['question']= whichQuestion
            #Answers = answer.objects.filter(whichQuestion=whichQuestion)
            #message['answers']= Answers.order_by('-created')
            return render(request,template_name,message)
        message = {}
        message['error_message'] = 'Answer submitted successfully.'
        #return redirect(reverse_lazy('forum:queAns whichQuestion.id'))
        return render(request,template_name,message)

#view questions asked by particular user
class myQuestions(View):

    def get(self,request,template_name='myQuestions.html'):
        message = {}
        stud = student.objects.filter(user=request.user)
        stud = stud[0]
        Questions = question.objects.filter(questionBy=stud)
        Questions = Questions.order_by('-created')
        message['questions']= Questions
        return render(request,template_name,message)

