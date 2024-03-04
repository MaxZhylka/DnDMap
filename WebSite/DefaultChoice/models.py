from django.db import models

class Classes(models.Model):
    ClassName = models.CharField('Имя Класса', max_length=20, default='')
    ClassCheckBox = models.BooleanField('Имеется ли', max_length=20, default='1')
    def __str__(self):
        return self.ClassName
class WheelClasses(models.Model):
    ClassName = models.CharField('Имя Класса', max_length=20, default='')
    ClassCheckBox = models.BooleanField('Имеется ли', max_length=20, default='1')
    def __str__(self):
        return self.ClassName
class Spells(models.Model):
    SpellName = models.CharField('Имя Заклинания', max_length=40, default='')
    SpellEngName = models.CharField('Имя Заклинания на Английском', max_length=40, default='')
    SLevel = ((0, 'Заговор'),
        (1, '1 Уровень'),
        (2, '2 Уровень'),
        (3, '3 Уровень'),
        (4, '4 Уровень'),
        (5, '5 Уровень'),
        (6, '6 Уровень'),
        (7, '7 Уровень'),
        (8, '8 Уровень'),
        (9, '9 Уровень'),)
    SpellLevel = models.IntegerField('Уровень заклинания', choices=SLevel, default=0)
    SSchool =((0,'Воплощение'),
        (1,'Вызов'),
        (2,'Иллюзия'),
        (3,'Некромантия'),
        (4,'Ограждение'),
        (5,'Очарование'),
        (6,'Преобразование'),
        (7,'Прорицание'))
    SpellSchool = models.IntegerField('Школа заклинания', choices=SSchool, default=0)
    SpellCastTime =models.IntegerField('Время накладывания', default=1)
    SpellCastTimeText = models.TextField('Еденица измерения', default='Действие')
    SpellDistance = models.CharField('Дистания',max_length=40,default='')
    SpellDistanceText = models.CharField('Еденица измерения', max_length=20,blank=True, default='Футы')
    SpellVerbal = models.BooleanField('Вербальные Компоненты', default='0')
    SpellSomat = models.BooleanField('Соматические Компоненты', default='0')
    SpellConcentration = models.BooleanField('Концентрация', default='0')
    SpellMaterial = models.BooleanField('Материальные Компоненты', default='0')
    SpellMaterials = models.TextField('Материалы', default='',blank=True)
    SpellDuration = models.TextField('Длительность', default='Мгновенно')
    SpellCaster = models.TextField('Класс с маленькой буквы!', default='')
    SpellArchtipes = models.TextField('Архетипы', default='',blank=True)
    SpellSource = models.TextField('Источник', default='Players handbook')
    SpellDescription = models.TextField('Описание',default='')
    SpellLevelDescription = models.TextField('На больших уровнях',default='',blank=True)
    SpellCheckBox = models.BooleanField('Имеется ли', default='1')
    def __str__(self):
        return self.SpellName
class WheelSpells(models.Model):
    SpellName = models.CharField('Имя Заклинания', max_length=40, default='')
    SpellEngName = models.CharField('Имя Заклинания на Английском', max_length=40, default='')
    SLevel = ((0, 'Заговор'),
        (1, '1 Уровень'),
        (2, '2 Уровень'),
        (3, '3 Уровень'),
        (4, '4 Уровень'),
        (5, '5 Уровень'),
        (6, '6 Уровень'),
        (7, '7 Уровень'),
        (8, '8 Уровень'),
        (9, '9 Уровень'),)
    SpellLevel = models.IntegerField('Уровень заклинания', choices=SLevel, default=0)
    SSchool =((0,'Воплощение'),
        (1,'Вызов'),
        (2,'Иллюзия'),
        (3,'Некромантия'),
        (4,'Ограждение'),
        (5,'Очарование'),
        (6,'Преобразование'),
        (7,'Прорицание'))
    SpellSchool = models.IntegerField('Школа заклинания', choices=SSchool, default=0)
    SpellCastTime =models.IntegerField('Время накладывания', default=1)
    SpellCastTimeText = models.TextField('Еденица измерения', default='Действие')
    SpellDistance = models.CharField('Дистания',max_length=40,default='')
    SpellDistanceText = models.CharField('Еденица измерения', max_length=20, default='Футы')
    SpellVerbal = models.BooleanField('Вербальные Компоненты', default='0')
    SpellSomat = models.BooleanField('Соматические Компоненты', default='0')
    SpellConcentration = models.BooleanField('Концентрация', default='0')
    SpellMaterial = models.BooleanField('Материальные Компоненты', default='0')
    SpellMaterials = models.TextField('Материалы', default='',blank=True)
    SpellDuration = models.TextField('Длительность', max_length=20, default='Мгновенно')
    SpellCaster = models.TextField('Класс с маленькой буквы!', default='')
    SpellArchtipes = models.TextField('Архетипы', default='',blank=True)
    SpellSource = models.TextField('Источник', default='Players handbook')
    SpellDescription = models.TextField('Описание',default='')
    SpellLevelDescription = models.TextField('На больших уровнях',default='',blank=True)
    SpellCheckBox = models.BooleanField('Имеется ли', default='0')
    def __str__(self):
        return self.SpellName
class Users(models.Model):
    users = models.CharField(max_length=100)
    link = models.OneToOneField(Classes, on_delete=models.CASCADE)


# Create your models here.
