# Generated by Django 3.1.1 on 2020-09-13 07:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('enquiries', '0002_auto_20200913_0753'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Vacancies',
            new_name='Enquiries',
        ),
    ]
