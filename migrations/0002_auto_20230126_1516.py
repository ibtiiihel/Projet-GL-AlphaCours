# Generated by Django 3.0 on 2023-01-26 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comptes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comptes',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='comptes',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]