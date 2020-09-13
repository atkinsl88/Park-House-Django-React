from django.db import models

class Gallery(models.Model):
    img_url = models.CharField(max_length=100)
    img_alt_desc = models.CharField(max_length=50)

    def __str__(self):
     return f'{self.img_alt_desc}'