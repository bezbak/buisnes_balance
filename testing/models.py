from django.db import models

# Create your models here.
class Test(models.Model):
    question = models.CharField(
        max_length=1000
    )
    answer = models.CharField(
        max_length=1000,
        blank=True, 
        null=True
    )
    
class Pochta(models.Model):
    full_name = models.CharField(
        max_length=255
    )
    phone = models.CharField(
        max_length=255
    )
    email = models.CharField(
        max_length=255
    )
    