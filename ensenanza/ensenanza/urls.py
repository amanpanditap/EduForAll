"""ensenanza URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.landingPage.as_view(), name='landingPage'),
    path('login', views.Login.as_view(), name='Login'),
    path('register', views.register.as_view(), name='register'),
    path('logout', views.Logout, name='Logout'),
    path('syllabus', views.Syllabus.as_view(), name='Syllabus'),
    path('tests', views.Tests.as_view(), name='Tests'),
    path('forum/',include('forum.urls',namespace='forum')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#path('classteacher', include('classteacher.urls', namespace='classteacher')),