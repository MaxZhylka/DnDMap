# Generated by Django 5.0.1 on 2024-06-02 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0017_remove_character_conspiraciesdata_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='additionalfeatures',
            field=models.TextField(blank=True, default='', verbose_name='Дополнительные способности и умения'),
        ),
        migrations.AlterField(
            model_name='character',
            name='age',
            field=models.TextField(blank=True, default='  ', verbose_name='Возраст'),
        ),
        migrations.AlterField(
            model_name='character',
            name='allies',
            field=models.TextField(blank=True, default='', verbose_name='Союзники и Организации'),
        ),
        migrations.AlterField(
            model_name='character',
            name='appearance',
            field=models.ImageField(blank=True, default='', upload_to='registration/photo/', verbose_name='Изображение'),
        ),
        migrations.AlterField(
            model_name='character',
            name='backstory',
            field=models.CharField(blank=True, default='', max_length=20, verbose_name='Предыстория'),
        ),
        migrations.AlterField(
            model_name='character',
            name='backstorys',
            field=models.TextField(blank=True, default='', verbose_name='Предыстория персонажа'),
        ),
        migrations.AlterField(
            model_name='character',
            name='bonds',
            field=models.TextField(blank=True, default='', verbose_name='Привязаности'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies0',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 1'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies1',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 2'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies10',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 11'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies11',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 12'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies12',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 13'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies2',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 3'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies3',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 4'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies4',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 5'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies5',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 6'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies6',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 7'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies7',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 8'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies8',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 9'),
        ),
        migrations.AlterField(
            model_name='character',
            name='conspiracies9',
            field=models.TextField(blank=True, default=list, verbose_name='Заговоры 10'),
        ),
        migrations.AlterField(
            model_name='character',
            name='equipment',
            field=models.TextField(blank=True, default='', verbose_name='Снарежение'),
        ),
        migrations.AlterField(
            model_name='character',
            name='experience',
            field=models.CharField(blank=True, default=0, max_length=10, verbose_name='Опыт'),
        ),
        migrations.AlterField(
            model_name='character',
            name='eyeColor',
            field=models.TextField(blank=True, default='  ', verbose_name='Глаза'),
        ),
        migrations.AlterField(
            model_name='character',
            name='features',
            field=models.TextField(blank=True, default='', verbose_name='Особенности'),
        ),
        migrations.AlterField(
            model_name='character',
            name='flaws',
            field=models.TextField(blank=True, default='', verbose_name='Слабости'),
        ),
        migrations.AlterField(
            model_name='character',
            name='hairColor',
            field=models.TextField(blank=True, default='  ', verbose_name='Волосы'),
        ),
        migrations.AlterField(
            model_name='character',
            name='height',
            field=models.TextField(blank=True, default='  ', verbose_name='Рост'),
        ),
        migrations.AlterField(
            model_name='character',
            name='ideals',
            field=models.TextField(blank=True, default='', verbose_name='Идеалы'),
        ),
        migrations.AlterField(
            model_name='character',
            name='name',
            field=models.CharField(blank=True, default='', max_length=20, verbose_name='Имя персонажа'),
        ),
        migrations.AlterField(
            model_name='character',
            name='personalTraits',
            field=models.TextField(blank=True, default='', verbose_name='Черты Характера'),
        ),
        migrations.AlterField(
            model_name='character',
            name='proficiencies',
            field=models.TextField(blank=True, default='', verbose_name='Умения'),
        ),
        migrations.AlterField(
            model_name='character',
            name='race',
            field=models.CharField(blank=True, default='', max_length=20, verbose_name='Раса'),
        ),
        migrations.AlterField(
            model_name='character',
            name='skinColor',
            field=models.TextField(blank=True, default='  ', verbose_name='Кожа'),
        ),
        migrations.AlterField(
            model_name='character',
            name='temporaryHitPoints',
            field=models.IntegerField(blank=True, default=0, null=True, verbose_name='Временные Хиты'),
        ),
        migrations.AlterField(
            model_name='character',
            name='treasure',
            field=models.TextField(blank=True, default='', verbose_name='Сокровища'),
        ),
        migrations.AlterField(
            model_name='character',
            name='weight',
            field=models.TextField(blank=True, default='  ', verbose_name='Вес'),
        ),
        migrations.AlterField(
            model_name='character',
            name='worldviews',
            field=models.CharField(blank=True, default='', max_length=20, verbose_name='Мировозрение'),
        ),
    ]