from django.urls import path

from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('ok',views.ok, name='ok'),
    path('signup',views.signup),
    path('notlogin',views.notlogin),
    path('login',views.login)
]
