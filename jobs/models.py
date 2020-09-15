from django.db import models

class Jobs(models.Model):
    job_title = models.CharField(max_length=100)
    job_desc = models.CharField(max_length=200)
    job_contact = models.CharField(max_length=200)

    def __str__(self):
      return f'{self.job_title}'