# Generated by Django 5.0.1 on 2024-04-30 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0008_character_attackundspells_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='height',
            field=models.IntegerField(default='  ', verbose_name='Рост'),
        ),
    ]
