# Generated by Django 3.1.1 on 2020-09-13 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enquiries', '0006_auto_20200913_0820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='enquiries',
            name='intrested_in',
            field=models.CharField(choices=[('carehome', 'Care Home'), ('daycare', 'Day Care'), ('domiciliarycare', 'Domiciliary Care'), ('livein', 'Live In')], default='Care Home', max_length=16),
        ),
        migrations.AlterField(
            model_name='enquiries',
            name='telephone',
            field=models.CharField(max_length=20),
        ),
    ]
