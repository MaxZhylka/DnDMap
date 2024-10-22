# Generated by Django 4.2.10 on 2024-02-19 18:20

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0004_alter_character_experience_alter_character_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='equipment',
            field=models.TextField(default='', verbose_name='Снарежение'),
        ),
        migrations.AddField(
            model_name='character',
            name='profiency',
            field=models.IntegerField(default=2, verbose_name='Бонус Мастерства'),
        ),
        migrations.AlterField(
            model_name='character',
            name='acrobatic',
            field=models.BooleanField(default=False, verbose_name='Акробатика'),
        ),
        migrations.AlterField(
            model_name='character',
            name='age',
            field=models.IntegerField(default='  ', verbose_name='Возраст'),
        ),
        migrations.AlterField(
            model_name='character',
            name='animalHandling',
            field=models.BooleanField(default=False, verbose_name='Уход за Животными'),
        ),
        migrations.AlterField(
            model_name='character',
            name='arcane',
            field=models.BooleanField(default=False, verbose_name='Магия'),
        ),
        migrations.AlterField(
            model_name='character',
            name='armourclass',
            field=models.IntegerField(default='  ', verbose_name='Класс Доспеха'),
        ),
        migrations.AlterField(
            model_name='character',
            name='athletics',
            field=models.BooleanField(default=False, verbose_name='Атлетика'),
        ),
        migrations.AlterField(
            model_name='character',
            name='charisma',
            field=models.IntegerField(default=10, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(30)], verbose_name='Харизма'),
        ),
        migrations.AlterField(
            model_name='character',
            name='constitution',
            field=models.IntegerField(default=10, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(30)], verbose_name='Телосложение'),
        ),
        migrations.AlterField(
            model_name='character',
            name='copper',
            field=models.IntegerField(default='  ', verbose_name='Медные Монеты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='deception',
            field=models.BooleanField(default=False, verbose_name='Обман'),
        ),
        migrations.AlterField(
            model_name='character',
            name='dexterity',
            field=models.IntegerField(default=10, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(30)], verbose_name='Ловкость'),
        ),
        migrations.AlterField(
            model_name='character',
            name='electrum',
            field=models.IntegerField(default='  ', verbose_name='Электровиумые Монеты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='eyeColor',
            field=models.IntegerField(default='  ', verbose_name='Глаза'),
        ),
        migrations.AlterField(
            model_name='character',
            name='golden',
            field=models.IntegerField(default='  ', verbose_name='Золотые Монеты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='hairColor',
            field=models.IntegerField(default='  ', verbose_name='Волосы'),
        ),
        migrations.AlterField(
            model_name='character',
            name='height',
            field=models.IntegerField(default='  ', verbose_name='Высота'),
        ),
        migrations.AlterField(
            model_name='character',
            name='history',
            field=models.BooleanField(default=False, verbose_name='История'),
        ),
        migrations.AlterField(
            model_name='character',
            name='hitDice',
            field=models.IntegerField(choices=[(0, ''), (1, '1d6'), (2, '1d8'), (3, '1d10'), (4, '1d12')], default='  ', verbose_name='Кости Хитов'),
        ),
        migrations.AlterField(
            model_name='character',
            name='insight',
            field=models.BooleanField(default=False, verbose_name='Проницательность'),
        ),
        migrations.AlterField(
            model_name='character',
            name='intelligence',
            field=models.IntegerField(default=10, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(30)], verbose_name='Интелект'),
        ),
        migrations.AlterField(
            model_name='character',
            name='intimidation',
            field=models.BooleanField(default=False, verbose_name='Запугивание'),
        ),
        migrations.AlterField(
            model_name='character',
            name='investigation',
            field=models.BooleanField(default=False, verbose_name='Расследование'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelEightTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 8 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelFiveTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 5 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelFourTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 4 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelNineTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 9 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelOneTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 1 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelSevenTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 7 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelSixTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 6 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelThreeTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 3 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='levelTwoTotal',
            field=models.IntegerField(default='  ', verbose_name='Количество ячеек 2 уровня'),
        ),
        migrations.AlterField(
            model_name='character',
            name='medicine',
            field=models.BooleanField(default=False, verbose_name='Медицина'),
        ),
        migrations.AlterField(
            model_name='character',
            name='nature',
            field=models.BooleanField(default=False, verbose_name='Природа'),
        ),
        migrations.AlterField(
            model_name='character',
            name='perception',
            field=models.BooleanField(default=False, verbose_name='Восприятие'),
        ),
        migrations.AlterField(
            model_name='character',
            name='performance',
            field=models.BooleanField(default=False, verbose_name='Выступление'),
        ),
        migrations.AlterField(
            model_name='character',
            name='persuasion',
            field=models.BooleanField(default=False, verbose_name='Убеждение'),
        ),
        migrations.AlterField(
            model_name='character',
            name='platinum',
            field=models.IntegerField(default='  ', verbose_name='Платиновые Монеты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='religion',
            field=models.BooleanField(default=False, verbose_name='Религия'),
        ),
        migrations.AlterField(
            model_name='character',
            name='silver',
            field=models.IntegerField(default='  ', verbose_name='Серебряные Монеты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='skinColor',
            field=models.IntegerField(default='  ', verbose_name='Кожа'),
        ),
        migrations.AlterField(
            model_name='character',
            name='sleightOfHand',
            field=models.BooleanField(default=False, verbose_name='Ловкость Рук'),
        ),
        migrations.AlterField(
            model_name='character',
            name='speed',
            field=models.IntegerField(default='  ', verbose_name='Скорость'),
        ),
        migrations.AlterField(
            model_name='character',
            name='spellAttackBonus',
            field=models.IntegerField(default='  ', verbose_name='Бонус Атаки Залинанием'),
        ),
        migrations.AlterField(
            model_name='character',
            name='spellSavingThrow',
            field=models.IntegerField(default='  ', verbose_name='Сложность Спасброска'),
        ),
        migrations.AlterField(
            model_name='character',
            name='stealth',
            field=models.BooleanField(default=False, verbose_name='Скрытность'),
        ),
        migrations.AlterField(
            model_name='character',
            name='strength',
            field=models.IntegerField(default=10, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(30)], verbose_name='Сила'),
        ),
        migrations.AlterField(
            model_name='character',
            name='survival',
            field=models.BooleanField(default=False, verbose_name='Выживание'),
        ),
        migrations.AlterField(
            model_name='character',
            name='temporaryHitPoints',
            field=models.IntegerField(default='  ', verbose_name='Временные Хиты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='weight',
            field=models.IntegerField(default='  ', verbose_name='Вес'),
        ),
        migrations.AlterField(
            model_name='character',
            name='wisdom',
            field=models.IntegerField(default=10, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(30)], verbose_name='Мудрость'),
        ),
    ]
