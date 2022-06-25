from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class File(models.Model):
    description = models.CharField(max_length=255, blank=True)
    document = models.FileField(upload_to='files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    
    def __str__(self):
        return self.description + ": " + str(self.document)
    
class Viz(models.Model):
    title = models.CharField(max_length=100, blank=True)
    comment = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    file = models.ForeignKey(File, on_delete=models.CASCADE, default=1)
    json = models.JSONField(blank=True, null=True)
    
    def __str__(self):
        return self.title + ": " +self.comment
