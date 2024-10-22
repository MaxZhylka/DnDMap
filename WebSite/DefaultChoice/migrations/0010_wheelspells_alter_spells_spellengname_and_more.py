# Generated by Django 4.2.10 on 2024-03-03 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DefaultChoice', '0009_alter_spells_spellarchtipes_alter_spells_spellcaster_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='WheelSpells',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SpellName', models.CharField(default='', max_length=40, verbose_name='Имя Заклинания')),
                ('SpellEngName', models.CharField(default='', max_length=40, verbose_name='Имя Заклинания на Английском')),
                ('SpellLevel', models.IntegerField(choices=[(0, 'Заговор'), (1, '1 Уровень'), (2, '2 Уровень'), (3, '3 Уровень'), (4, '4 Уровень'), (5, '5 Уровень'), (6, '6 Уровень'), (7, '7 Уровень'), (8, '8 Уровень'), (9, '9 Уровень')], default=0, verbose_name='Уровень заклинания')),
                ('SpellSchool', models.IntegerField(choices=[(0, 'Воплощение'), (1, 'Вызов'), (2, 'Иллюзия'), (3, 'Некромантия'), (4, 'Ограждение'), (5, 'Очарование'), (6, 'Преобразование'), (7, 'Прорицание')], default=0, verbose_name='Школа заклинания')),
                ('SpellCastTime', models.IntegerField(default=1, verbose_name='Время накладывания')),
                ('SpellCastTimeText', models.TextField(default='Действие', verbose_name='Еденица измерения')),
                ('SpellDistance', models.CharField(default='', max_length=40, verbose_name='Дистания')),
                ('SpellDistanceText', models.CharField(default='Футы', max_length=20, verbose_name='Еденица измерения')),
                ('SpellVerbal', models.BooleanField(default='0', verbose_name='Вербальные Компоненты')),
                ('SpellSomat', models.BooleanField(default='0', verbose_name='Соматические Компоненты')),
                ('SpellConcentration', models.BooleanField(default='0', verbose_name='Концентрация')),
                ('SpellMaterial', models.BooleanField(default='0', verbose_name='Материальные Компоненты')),
                ('SpellMaterials', models.TextField(blank=True, default='', verbose_name='Материалы')),
                ('SpellDuration', models.TextField(default='Мгновенно', max_length=20, verbose_name='Длительность')),
                ('SpellCaster', models.TextField(default='', verbose_name='Класс с маленькой буквы!')),
                ('SpellArchtipes', models.TextField(blank=True, default='', verbose_name='Архетипы')),
                ('SpellSource', models.TextField(default='Players handbook', verbose_name='Источник')),
                ('SpellDescription', models.TextField(default='', verbose_name='Описание')),
                ('SpellLevelDescription', models.TextField(blank=True, default='', verbose_name='На больших уровнях')),
                ('SpellCheckBox', models.BooleanField(default='1', verbose_name='Имеется ли')),
            ],
        ),
        migrations.AlterField(
            model_name='spells',
            name='SpellEngName',
            field=models.CharField(default='', max_length=40, verbose_name='Имя Заклинания на Английском'),
        ),
        migrations.AlterField(
            model_name='spells',
            name='SpellName',
            field=models.CharField(default='', max_length=40, verbose_name='Имя Заклинания'),
        ),
    ]
