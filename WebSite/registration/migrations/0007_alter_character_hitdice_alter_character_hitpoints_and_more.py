# Generated by Django 5.0.1 on 2024-02-23 12:36

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0006_character_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='hitDice',
            field=models.IntegerField(choices=[(0, ''), (1, '1d6'), (2, '1d8'), (3, '1d10'), (4, '1d12')], default='', verbose_name='Кости Хитов'),
        ),
        migrations.AlterField(
            model_name='character',
            name='hitPoints',
            field=models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Текущие Хиты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='hitPointsMax',
            field=models.IntegerField(default=1, verbose_name='Максимальные Хиты'),
        ),
    ]
