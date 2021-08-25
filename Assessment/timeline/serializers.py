from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from django.utils import timezone
from timeline.models import TwitterTimeline



class TwitterTimelineSerializer(serializers.ModelSerializer): 
    class Meta:
        model = TwitterTimeline
        fields = '__all__'