from django.db import models
from django.core.validators import MaxValueValidator
from django.core.validators import MinValueValidator

class Character(models.Model):

    name = models.CharField('Имя персонажа',max_length=20,default='')
    characterClass = models.CharField('Класс',max_length=20,default='')
    backstorys = models.CharField('Предыстория',max_length=20,default='')
    race = models.CharField('Раса',max_length=20,default='')
    worldviews = models.CharField('Мировозрение',max_length=20,default='')
    experience = models.IntegerField('Опыт')
    level = models.IntegerField('Уровень',default=1)
    profiency = models.IntegerField('Бонус Мастерства',default=2)
    сharacterPlayer = models.CharField('Имя игрока',max_length=20,default='')
    strength = models.IntegerField('Сила',validators=[MinValueValidator(0), MaxValueValidator(30)],default=10)
    dexterity = models.IntegerField('Ловкость',validators=[MinValueValidator(0), MaxValueValidator(30)],default=10)
    constitution = models.IntegerField('Телосложение',validators=[MinValueValidator(0), MaxValueValidator(30)],default=10)
    intelligence = models.IntegerField('Интелект',validators=[MinValueValidator(0), MaxValueValidator(30)],default=10)
    wisdom = models.IntegerField('Мудрость',validators=[MinValueValidator(0), MaxValueValidator(30)],default=10)
    charisma = models.IntegerField('Харизма',validators=[MinValueValidator(0), MaxValueValidator(30)],default=10)
    inspiration = models.BooleanField('Вдохновление',default=False)
    strength_savingthrow = models.BooleanField('Спасбросок Силы',default=False)
    dexterity_savingthrow = models.BooleanField('Спасбросок Ловкости',default=False)
    constitution_savingthrow = models.BooleanField('Спасбросок Телосложения',default=False)
    intelligence_savingthrow = models.BooleanField('Спасбросок Интелекта',default=False)
    wisdom_savingthrow = models.BooleanField('Спасбросок Мудрости',default=False)
    charisma_savingthrow = models.BooleanField('Спасбросок Харизмы',default=False)
    STATUS_CHOICES = (
        (0, 'Нет Владения'),
        (1, 'Владение'),
        (2, 'Мастерство'),
    )
    acrobatic = models.BooleanField('Акробатика',default=False)
    animalHandling = models.BooleanField('Уход за Животными',default=False)
    arcane = models.BooleanField('Магия',default=False)
    athletics = models.BooleanField('Атлетика',default=False)
    deception = models.BooleanField('Обман',default=False)
    history = models.BooleanField('История',default=False)
    insight = models.BooleanField('Проницательность',default=False)
    intimidation = models.BooleanField('Запугивание',default=False)
    investigation = models.BooleanField('Расследование',default=False)
    medicine = models.BooleanField('Медицина',default=False)
    nature = models.BooleanField('Природа',default=False)
    perception = models.BooleanField('Восприятие',default=False)
    performance = models.BooleanField('Выступление',default=False)
    persuasion = models.BooleanField('Убеждение',default=False)
    religion = models.BooleanField('Религия',default=False)
    sleightOfHand = models.BooleanField('Ловкость Рук',default=False)
    stealth = models.BooleanField('Скрытность',default=False)
    survival = models.BooleanField('Выживание',default=False)

    armourclass = models.IntegerField('Класс Доспеха',default='  ')
    speed = models.IntegerField('Скорость',default='  ')
    hitPointsMax = models.IntegerField('Максимальные Хиты',default=1)
    hitPoints = models.IntegerField('Текущие Хиты', validators=[MinValueValidator(0)],default=1)
    temporaryHitPoints = models.IntegerField('Временные Хиты',default='  ')
    dice_choices = (
        (0, ''),
        (1, '1d6'),
        (2, '1d8'),
        (3, '1d10'),
        (4, '1d12'),
    )
    hitDice = models.IntegerField('Кости Хитов',choices=dice_choices,default='')
    personalTraits = models.TextField('Черты Характера',default='')
    ideals = models.TextField('Идеалы',default='')
    bonds = models.TextField('Привязаности',default='')
    flaws = models.TextField('Слабости',default='')
    features = models.TextField('Особенности',default='')
    proficiencies = models.TextField('Умения',default='')
    attackundspells = models.TextField('Атаки и Заклинания', default='')
    equipment = models.TextField('Снарежение',default='')
    platinum = models.IntegerField('Платиновые Монеты',default='  ')
    electrum = models.IntegerField('Электровиумые Монеты',default='  ')
    golden = models.IntegerField('Золотые Монеты',default='  ')
    silver = models.IntegerField('Серебряные Монеты',default='  ')
    copper = models.IntegerField('Медные Монеты',default='  ')
    age = models.IntegerField('Возраст',default='  ')
    height = models.IntegerField('Высота',default='  ')
    weight = models.IntegerField('Вес',default='  ')
    eyeColor = models.IntegerField('Глаза',default='  ')
    skinColor = models.IntegerField('Кожа',default='  ')
    hairColor = models.IntegerField('Волосы',default='  ')
    appearance = models.ImageField('Изображение',upload_to='registration/photo/',default='')
    allies = models.TextField('Союзники и Организации',default='')
    backstory = models.TextField('Предыстория персонажа',default='')
    additionalfeatures = models.TextField('Дополнительные способности и умения',default='')
    treasure = models.TextField('Сокровища',default='')
    spellcastingClass = models.CharField('Клас Заклинателя',max_length=20,default='')
    spellcastingAbility = (
        (0, 'Интелект'),
        (1, 'Мудрость'),
        (2, 'Харизма'),
    )
    spellcastingAbilityScore = models.IntegerField('Базовые характеристики Заклинаний',choices=spellcastingAbility,default='0')
    spellSavingThrow = models.IntegerField('Сложность Спасброска',default='  ')
    spellAttackBonus = models.IntegerField('Бонус Атаки Залинанием',default='  ')
    levelOneTotal = models.IntegerField('Количество ячеек 1 уровня',default='  ')
    levelTwoTotal = models.IntegerField('Количество ячеек 2 уровня',default='  ')
    levelThreeTotal = models.IntegerField('Количество ячеек 3 уровня',default='  ')
    levelFourTotal = models.IntegerField('Количество ячеек 4 уровня',default='  ')
    levelFiveTotal = models.IntegerField('Количество ячеек 5 уровня',default='  ')
    levelSixTotal = models.IntegerField('Количество ячеек 6 уровня',default='  ')
    levelSevenTotal = models.IntegerField('Количество ячеек 7 уровня',default='  ')
    levelEightTotal = models.IntegerField('Количество ячеек 8 уровня',default='  ')
    levelNineTotal = models.IntegerField('Количество ячеек 9 уровня',default='  ')
    location = models.CharField('Текущее местополжение',max_length=20,default='waterdeep')

    def __str__(self):
        return self.name
class Users(models.Model):
    users = models.CharField(max_length=100)
    link = models.OneToOneField(Character, on_delete=models.CASCADE)

