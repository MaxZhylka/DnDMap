import binascii
import os

from django.contrib.auth.hashers import check_password
from django.db import models
from django.core.validators import MaxValueValidator
from django.core.validators import MinValueValidator
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from WebSite import settings

class PlayerManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.avatar = 'Profiles/img.png'
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        return self._create_user(email, password, **extra_fields)

    def authenticate(self, email=None, password=None):
        try:
            user = self.model.objects.get(email=email)
            if user and check_password(password, user.password):
                return user
        except self.model.DoesNotExist:
            return None

class Player(AbstractBaseUser):
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    name = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to='Profiles/', default='Profiles/img.png')
    objects = PlayerManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

class Character(models.Model):
    player = models.ForeignKey(Player, related_name='characters', on_delete=models.CASCADE)
    name = models.CharField('Имя персонажа', max_length=20, default='', blank=True)
    characterClass = models.CharField('Класс', max_length=20, default='')
    backstory = models.CharField('Предыстория', max_length=20, default='', blank=True)
    race = models.CharField('Раса', max_length=20, default='', blank=True)
    worldviews = models.CharField('Мировозрение', max_length=20, default='', blank=True)
    experience = models.CharField('Опыт', default=0,max_length=10, blank=True)
    level = models.IntegerField('Уровень', default=1)
    profiency = models.IntegerField('Бонус Мастерства', default=2)
    сharacterPlayer = models.CharField('Имя игрока', max_length=20, default='')
    strength = models.IntegerField('Сила', validators=[MinValueValidator(0), MaxValueValidator(30)], default=10)
    dexterity = models.IntegerField('Ловкость', validators=[MinValueValidator(0), MaxValueValidator(30)], default=10)
    constitution = models.IntegerField('Телосложение', validators=[MinValueValidator(0), MaxValueValidator(30)],
                                       default=10)
    intelligence = models.IntegerField('Интелект', validators=[MinValueValidator(0), MaxValueValidator(30)], default=10)
    wisdom = models.IntegerField('Мудрость', validators=[MinValueValidator(0), MaxValueValidator(30)], default=10)
    charisma = models.IntegerField('Харизма', validators=[MinValueValidator(0), MaxValueValidator(30)], default=10)
    inspiration = models.BooleanField('Вдохновление', default=False)
    strength_savingthrow = models.BooleanField('Спасбросок Силы', default=False)
    dexterity_savingthrow = models.BooleanField('Спасбросок Ловкости', default=False)
    constitution_savingthrow = models.BooleanField('Спасбросок Телосложения', default=False)
    intelligence_savingthrow = models.BooleanField('Спасбросок Интелекта', default=False)
    wisdom_savingthrow = models.BooleanField('Спасбросок Мудрости', default=False)
    charisma_savingthrow = models.BooleanField('Спасбросок Харизмы', default=False)
    STATUS_CHOICES = (
        (0, 'Нет Владения'),
        (1, 'Владение'),
        (2, 'Мастерство'),
    )
    acrobatic = models.IntegerField('Акробатика', choices=STATUS_CHOICES, default=0)
    animalHandling = models.IntegerField('Уход за Животными', choices=STATUS_CHOICES, default=0)
    arcane = models.IntegerField('Магия', choices=STATUS_CHOICES, default=0)
    athletics = models.IntegerField('Атлетика', choices=STATUS_CHOICES, default=0)
    deception = models.IntegerField('Обман', choices=STATUS_CHOICES, default=0)
    history = models.IntegerField('История', choices=STATUS_CHOICES, default=0)
    insight = models.IntegerField('Проницательность', choices=STATUS_CHOICES, default=0)
    intimidation = models.IntegerField('Запугивание', choices=STATUS_CHOICES, default=0)
    investigation = models.IntegerField('Расследование', choices=STATUS_CHOICES, default=0)
    medicine = models.IntegerField('Медицина', choices=STATUS_CHOICES, default=0)
    nature = models.IntegerField('Природа', choices=STATUS_CHOICES, default=0)
    perception = models.IntegerField('Восприятие', choices=STATUS_CHOICES, default=0)
    performance = models.IntegerField('Выступление', choices=STATUS_CHOICES, default=0)
    persuasion = models.IntegerField('Убеждение', choices=STATUS_CHOICES, default=0)
    religion = models.IntegerField('Религия', choices=STATUS_CHOICES, default=0)
    sleightOfHand = models.IntegerField('Ловкость Рук', choices=STATUS_CHOICES, default=0)
    stealth = models.IntegerField('Скрытность', choices=STATUS_CHOICES, default=0)
    survival = models.IntegerField('Выживание', choices=STATUS_CHOICES, default=0)

    armourclass = models.IntegerField('Класс Доспеха', default=0)
    speed = models.IntegerField('Скорость', default=0)
    hitPointsMax = models.IntegerField('Максимальные Хиты', default=1)
    hitPoints = models.IntegerField('Текущие Хиты', validators=[MinValueValidator(0)], default=1)
    temporaryHitPoints = models.IntegerField('Временные Хиты', default=0, blank=True, null=True)

    hitDice = models.CharField('Кости Хитов', max_length=20, default=0)
    success1 = models.BooleanField('Успех 1', default=0)
    success2 = models.BooleanField('Успех 2', default=0)
    success3 = models.BooleanField('Успех 3', default=0)
    fail1 = models.BooleanField('Провал 1', default=0)
    fail2 = models.BooleanField('Провал 2', default=0)
    fail3 = models.BooleanField('Провал 3', default=0)

    personalTraits = models.TextField('Черты Характера', default='', blank=True)
    ideals = models.TextField('Идеалы', default='', blank=True)
    bonds = models.TextField('Привязаности', default='', blank=True)
    flaws = models.TextField('Слабости', default='', blank=True)
    features = models.TextField('Особенности', default='', blank=True)
    proficiencies = models.TextField('Умения', default='', blank=True)
    spells = models.JSONField('Заклинания', default=list)
    equipment = models.TextField('Снарежение', default='', blank=True)
    platinum = models.IntegerField('Платиновые Монеты',default=0)
    electrum = models.IntegerField('Электровиумые Монеты', default=0)
    golden = models.IntegerField('Золотые Монеты', default=0)
    silver = models.IntegerField('Серебряные Монеты', default=0)
    copper = models.IntegerField('Медные Монеты', default=0)

    age = models.TextField('Возраст', default='  ', blank=True)
    height = models.TextField('Рост', default='  ', blank=True)
    weight = models.TextField('Вес', default='  ', blank=True)
    eyeColor = models.TextField('Глаза', default='  ', blank=True)
    skinColor = models.TextField('Кожа', default='  ', blank=True)
    hairColor = models.TextField('Волосы', default='  ', blank=True)

    appearance = models.FileField('Изображение', upload_to='registration/photo/', default='', blank=True)

    allies = models.TextField('Союзники и Организации', default='', blank=True)
    backstorys = models.TextField('Предыстория персонажа', default='', blank=True)
    additionalfeatures = models.TextField('Дополнительные способности и умения', default='', blank=True)
    treasure = models.TextField('Сокровища', default='', blank=True)
    spellcastingAbility = (
        (0, 'Интелект'),
        (1, 'Мудрость'),
        (2, 'Харизма'),
    )
    spellcastingAbilityScore = models.TextField('Базовые характеристики Заклинаний', default='0')

    spellSlots = models.JSONField('Информация о слотах', default=list)
    spellSlotsBoolean = models.JSONField('Информация о слотах чекбоксы', default=list)
    spellData = models.JSONField('Информация о заклинаниях', default=list)
    conspiracies0 = models.TextField('Заговоры 1', default=list, blank=True)
    conspiracies1 = models.TextField('Заговоры 2', default=list, blank=True)
    conspiracies2 = models.TextField('Заговоры 3', default=list, blank=True)
    conspiracies3 = models.TextField('Заговоры 4', default=list, blank=True)
    conspiracies4 = models.TextField('Заговоры 5', default=list, blank=True)
    conspiracies5 = models.TextField('Заговоры 6', default=list, blank=True)
    conspiracies6 = models.TextField('Заговоры 7', default=list, blank=True)
    conspiracies7 = models.TextField('Заговоры 8', default=list, blank=True)
    conspiracies8 = models.TextField('Заговоры 9', default=list, blank=True)
    conspiracies9 = models.TextField('Заговоры 10', default=list, blank=True)
    conspiracies10 = models.TextField('Заговоры 11', default=list, blank=True)
    conspiracies11 = models.TextField('Заговоры 12', default=list, blank=True)
    conspiracies12 = models.TextField('Заговоры 13', default=list, blank=True)

    location = models.CharField('Текущее местополжение', max_length=20, default='waterdeep')

    def __str__(self):
        return self.name



class UploadedImage(models.Model):
    image = models.ImageField(upload_to='Profiles/')
    uploaded_at = models.DateTimeField(auto_now_add=True)


class Token(models.Model):
    key = models.CharField(max_length=40, primary_key=True)
    user = models.ForeignKey(Player, related_name='auth_token',
                             on_delete=models.CASCADE, verbose_name="User")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.key
