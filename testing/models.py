from django.db import models

# Create your models here.
class Test(models.Model):
    question = models.CharField(
        max_length=1000
    )