from django.db import models

intrested_in_choices = (
    ('carehome','Care Home'),
    ('daycare', 'Day Care'),
    ('domiciliarycare','Domiciliary Care'),
    ('livein','Live In'),
)

class Enquiries(models.Model):
  first_name = models.CharField(max_length=20)
  last_name = models.CharField(max_length=20)
  email = models.CharField(max_length=40, unique=True)
  telephone = models.CharField(max_length=20)
  intrested_in = models.CharField(max_length=16, choices=intrested_in_choices, default='Care Home')
  have_agreed = models.BooleanField(default=False)

  def __str__(self):
    return f'{self.first_name} {self.last_name} - {self.email}'
