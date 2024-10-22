# Generated by Django 5.0.1 on 2024-06-01 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0013_character_conspiraciesdata_character_lvleight_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='character',
            name='attackundspells',
        ),
        migrations.AddField(
            model_name='character',
            name='fail1',
            field=models.BooleanField(default=0, verbose_name='Провал 1'),
        ),
        migrations.AddField(
            model_name='character',
            name='fail2',
            field=models.BooleanField(default=0, verbose_name='Провал 2'),
        ),
        migrations.AddField(
            model_name='character',
            name='fail3',
            field=models.BooleanField(default=0, verbose_name='Провал 3'),
        ),
        migrations.AddField(
            model_name='character',
            name='spells',
            field=models.JSONField(default=list, verbose_name='Заклинания'),
        ),
        migrations.AddField(
            model_name='character',
            name='success1',
            field=models.BooleanField(default=0, verbose_name='Успех 1'),
        ),
        migrations.AddField(
            model_name='character',
            name='success2',
            field=models.BooleanField(default=0, verbose_name='Успех 2'),
        ),
        migrations.AddField(
            model_name='character',
            name='success3',
            field=models.BooleanField(default=0, verbose_name='Успех 3'),
        ),
        migrations.AlterField(
            model_name='character',
            name='acrobatic',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Акробатика'),
        ),
        migrations.AlterField(
            model_name='character',
            name='animalHandling',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Уход за Животными'),
        ),
        migrations.AlterField(
            model_name='character',
            name='arcane',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Магия'),
        ),
        migrations.AlterField(
            model_name='character',
            name='athletics',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Атлетика'),
        ),
        migrations.AlterField(
            model_name='character',
            name='deception',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Обман'),
        ),
        migrations.AlterField(
            model_name='character',
            name='history',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='История'),
        ),
        migrations.AlterField(
            model_name='character',
            name='hitDice',
            field=models.IntegerField(choices=[(0, '1d6'), (1, '1d8'), (2, '1d10'), (3, '1d12')], default='', verbose_name='Кости Хитов'),
        ),
        migrations.AlterField(
            model_name='character',
            name='insight',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Проницательность'),
        ),
        migrations.AlterField(
            model_name='character',
            name='intimidation',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Запугивание'),
        ),
        migrations.AlterField(
            model_name='character',
            name='investigation',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Расследование'),
        ),
        migrations.AlterField(
            model_name='character',
            name='medicine',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Медицина'),
        ),
        migrations.AlterField(
            model_name='character',
            name='nature',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Природа'),
        ),
        migrations.AlterField(
            model_name='character',
            name='perception',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Восприятие'),
        ),
        migrations.AlterField(
            model_name='character',
            name='performance',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Выступление'),
        ),
        migrations.AlterField(
            model_name='character',
            name='persuasion',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Убеждение'),
        ),
        migrations.AlterField(
            model_name='character',
            name='religion',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Религия'),
        ),
        migrations.AlterField(
            model_name='character',
            name='sleightOfHand',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Ловкость Рук'),
        ),
        migrations.AlterField(
            model_name='character',
            name='stealth',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Скрытность'),
        ),
        migrations.AlterField(
            model_name='character',
            name='survival',
            field=models.IntegerField(choices=[(0, 'Нет Владения'), (1, 'Владение'), (2, 'Мастерство')], default=0, verbose_name='Выживание'),
        ),
    ]
