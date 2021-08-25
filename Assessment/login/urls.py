from django.conf.urls import url, include
from .views import login_view, logout_view

urlpatterns = [
    url(r'', login_view, name='login'),
    url(r'^logout/', logout_view, name='logout'),
]
