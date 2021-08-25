from django import forms
from django.contrib.auth import authenticate
from django.forms import ModelChoiceField, ModelMultipleChoiceField
from .models import Users
import datetime
import base64

class LoginForm(forms.Form):
    '''
        Login Form
    '''
    username = forms.CharField(label="Username", required=True)
    password = forms.CharField(
        label="Password", required=True, widget=forms.PasswordInput)
    remember = forms.BooleanField(label="Remember Me?", required=False)

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super(LoginForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs = {
            'id': 'username', 'class': 'form-control', 'placeholder': ' Username '}
        self.fields['password'].widget.attrs = {
            'id': 'password', 'class': 'form-control', 'placeholder': ' Password '}
    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        
        try:
            user = Users.objects.get(user_name=self.user, is_active=True)
            # if user is not None:
            if str(username) == str(user) and user.password == password:
                return True
            else:
                raise forms.ValidationError(
                    "Sorry, Invalid credentials.")
        except Users.DoesNotExist:
            raise forms.ValidationError(
                "Sorry, that user does not exist.")
        except ValueError as e:
            raise forms.ValidationError(e.message)


    def login(self, request):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        return user