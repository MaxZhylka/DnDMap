# Generated by Django 5.0.1 on 2024-06-05 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0007_remove_cities_coordinates_cities_cityphoto'),
    ]

    operations = [
        migrations.AddField(
            model_name='cities',
            name='region',
            field=models.CharField(default='Побережье Мечей', max_length=50, verbose_name='Регион'),
        ),
    ]