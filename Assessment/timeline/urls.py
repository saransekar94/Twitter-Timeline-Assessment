from django.conf.urls import url, include
from . import views
from views import *

urlpatterns = [  

    url(r'^twitter_list/', TwitterTimelineView.as_view(), name='twitter_list'),

]
