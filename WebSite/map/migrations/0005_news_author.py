# Generated by Django 5.0.1 on 2024-02-29 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0004_news'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='Author',
            field=models.CharField(default=0, max_length=30, verbose_name='News_Author'),
            preserve_default=False,
        ),
    ]