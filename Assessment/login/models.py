from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Users(models.Model):
	user_name = models.CharField(max_length=50)
	password = models.CharField(max_length=50, null=True, help_text="Provide the bind user password here!")
	email_id = models.CharField(max_length=100, null=True)
	mobile_number = models.CharField(max_length=13, null=True)
	is_active = models.BooleanField(default=False)
	last_modified_date = models.DateTimeField(auto_now=True)

    # def save(self, *args, **kwargs):
    #     self.password = base64.b64encode(self.password)
    #     super(LDAP, self).save(*args, **kwargs)

	class Meta:
		db_table = 'Users'
        
	def __str__(self):
		return self.user_name    
