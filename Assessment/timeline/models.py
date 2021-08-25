from __future__ import unicode_literals

from django.db import models

# Create your models here.
class TwitterTimeline(models.Model):
	id = models.CharField(max_length=200, primary_key=True)
	text = models.TextField(max_length=500, null=True, blank=True)
	created_date = models.CharField(max_length=50)
	last_modified_date = models.DateTimeField(auto_now=True)

	class Meta:
		db_table = 'TwitterTimeline'
        
	def __str__(self):
		return self.id