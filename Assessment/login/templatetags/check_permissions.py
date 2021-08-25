from django import template

from login.models import Users
from django.contrib.auth.models import Permission
from django.apps import apps
import datetime
register = template.Library()


@register.filter(name='check_perms')
def check_perms(user, codename):
    try:
        user = Users.objects.get(user=user)
        if codename in user.user_permissions.all().values_list("codename", flat=True):
            return True
        else:
            return False
    except Users.DoesNotExist:
        return True


@register.filter(name='check_access')
def check_access(user, screen_name):
    user = Users.objects.get(user=user)
    return True


