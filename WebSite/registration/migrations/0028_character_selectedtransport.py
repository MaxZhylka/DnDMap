# Generated by Django 5.0.1 on 2024-06-14 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0027_alter_character_copper_alter_character_electrum_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='selectedTransport',
            field=models.CharField(blank=True, max_length=30, null=True, verbose_name='Выбранный транспорт'),
        ),
    ]
