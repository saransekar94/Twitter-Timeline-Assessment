import json
import datetime
from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from django.views.generic import View, TemplateView
from django.template.response import TemplateResponse
from login.views import LoginRequiredMixin, get_user_dict
# from django.core import serializers
from timeline.models import TwitterTimeline 
from datetime import datetime
from django.template import loader 
# from timeline.serializers import TwitterTimelineSerializer


# Create your views here.

class TwitterTimelineView(LoginRequiredMixin, View):
    template_name = "timeline/timeline.html"	
    def get(self, request):
        # import pdb;pdb.set_trace();
        twitters_list = []
        twitters = TwitterTimeline.objects.all().order_by('created_date')
        for twitter in twitters:
            twitters_list.append(
                  {
                     "id": str(twitter.id),
                     "text" : twitter.text.encode('utf8', 'replace'),
                     "Created_date": str(twitter.created_date)
                  }
            )   
        twitters_data = json.dumps(twitters_list)
        # twitter_serializer = TwitterTimelineSerializer(twitter_list, many=True)
        return render(request, self.template_name, {            
            'timeline_list': twitters,
            'twitter_list': twitters_data
        })