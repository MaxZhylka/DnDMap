# Generated by Django 5.0.1 on 2024-06-04 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0019_alter_character_appearance_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='appearance',
            field=models.ImageField(blank=True, default='', upload_to='registration/photo/', verbose_name='Изображение'),
        ),
    ]
