# Generated by Django 5.0.1 on 2024-05-05 08:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0011_alter_player_managers_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='avatar',
            field=models.ImageField(default='Profiles/img.png', upload_to='Profiles/'),
        ),
    ]