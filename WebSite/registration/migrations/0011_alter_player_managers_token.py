# Generated by Django 5.0.1 on 2024-05-04 08:18

import django.db.models.deletion
import registration.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0010_player_delete_users'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='player',
            managers=[
                ('objects', registration.models.PlayerManager()),
            ],
        ),
        migrations.CreateModel(
            name='Token',
            fields=[
                ('key', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='auth_token', to='registration.player', verbose_name='User')),
            ],
        ),
    ]