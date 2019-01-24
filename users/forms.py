from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField(label='',widget=forms.TextInput(attrs={'placeholder': 'E-mail'}))
    username = forms.CharField(label='',widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password1 = forms.CharField(label='',widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
    password2 = forms.CharField(label='',widget=forms.PasswordInput(attrs={'placeholder': 'Re-Enter Password'}))


    class Meta:
        model = User
        fields = ['email','username','password1', 'password2']
