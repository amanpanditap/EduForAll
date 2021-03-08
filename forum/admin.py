from django.contrib import admin

# Register your models here.
from forum.models import student, question, answer
# Register your models here.
admin.site.register(student)
admin.site.register(question)
admin.site.register(answer)

