from.models import Character
from django.forms import ModelForm, TextInput, NumberInput, Textarea,BooleanField,CheckboxInput,ChoiceField,ImageField,ClearableFileInput
from django import forms
class CharacterForm(ModelForm):
    class Meta:
        model = Character
        fields = ['name','characterClass','race','backstorys','сharacterPlayer','worldviews','experience','level','personalTraits','ideals','bonds','flaws','features','strength','dexterity','constitution','intelligence','wisdom','charisma','inspiration','strength_savingthrow','dexterity_savingthrow','constitution_savingthrow','intelligence_savingthrow','wisdom_savingthrow','charisma_savingthrow','acrobatic','athletics','perception','survival','performance','intimidation','history','sleightOfHand','arcane','medicine','deception','nature','insight','investigation','religion','stealth','persuasion','animalHandling','proficiencies','armourclass','speed','hitPoints','hitPointsMax','temporaryHitPoints','hitDice','equipment','platinum','electrum','golden','silver','copper','age','height','weight','eyeColor','skinColor','hairColor','appearance','backstory','allies','additionalfeatures','treasure','attackundspells','spellcastingClass','spellcastingAbilityScore']

        dice_choices = (
            (0, ''),
            (1, '1d6'),
            (2, '1d8'),
            (3, '1d10'),
            (4, '1d12'),
        )
        widgets = {
            "name": TextInput(attrs={
                'id': 'name',
                'class': "nameText"
                }),
            "characterClass": TextInput(attrs={
                'id': 'characterClass',
                'class':"test"

            }),
            "race": TextInput(attrs={
                'id': 'race',
                'class':"test"
            }),
            "backstorys": TextInput(attrs={
                'id': 'backstorys',
                'class':"test"
            }),
            "сharacterPlayer": TextInput(attrs={
                'id': 'сharacterPlayer',
                'readonly': 'readonly',
                'class':"test"
            }),
            "worldviews": TextInput(attrs={
                'id': 'worldviews',
                'class':"test"
            }),
            "experience": NumberInput(attrs={
                'id': 'experience',
                'class':"test"
            }),
            "level": NumberInput(attrs={
                'id': 'level',
                'class':"test"
            }),
            # ТУТ ОТСТУП ШОБ БЫЛО ОЧЕНЬ БОЛЬШОЙ ОТСТУП ШОБ НЕ ПОТЕРЯТСЯ

            # ТУТ ОТСТУП ШОБ БЫЛО ОЧЕНЬ БОЛЬШОЙ ОТСТУП ШОБ НЕ ПОТЕРЯТСЯ
            "personalTraits": Textarea(attrs={
                'id': 'personalTraits',
                'class':"per"
            }),
            "ideals": Textarea(attrs={
                'id': 'ideals',
                'class':"per"
            }),
            "bonds": Textarea(attrs={
                'id': 'bonds',
                'class':"per"
            }),
            "flaws": Textarea(attrs={
                'id': 'flaws',
                'class':"per"
            }),
            "features": Textarea(attrs={
                'id': 'features',
                'style': 'min-width: 296px; max-width: 296px;min-height: 560px; max-height: 560px;'
                         'border: none; display: block;outline: none;background-color: transparent;'
            }),
            "strength": NumberInput(attrs={
                'id': 'strength',
                'class':"templforma"
            }),
            "dexterity": NumberInput(attrs={
                'id': 'dexterity',
                'class':"templforma"
            }),
            "constitution": NumberInput(attrs={
                'id': 'constitution',
                'class':"templforma"
            }),
            "intelligence": NumberInput(attrs={
                'id': 'intelligence',
                'class':"templforma"
            }),
            "wisdom": NumberInput(attrs={
                'id': 'wisdom',
                'class':"templforma"
            }),
            "charisma": NumberInput(attrs={
                'id': 'charisma',
                'class':"templforma"
            }),
            "inspiration": CheckboxInput(attrs={
                'id': 'inspiration',
                'class':"point"

            }),
            "strength_savingthrow": CheckboxInput(attrs={
                'id': 'strength_savingthrow',
                'class':"point"
            }),
            "dexterity_savingthrow": CheckboxInput(attrs={
                'id': 'dexterity_savingthrow',
                'class':"point"
            }),
            "constitution_savingthrow": CheckboxInput(attrs={
                'id': 'constitution_savingthrow',
                'class':"point"
            }),
            "intelligence_savingthrow": CheckboxInput(attrs={
                'id': 'intelligence_savingthrow',
                'class':"point"
            }),
            "wisdom_savingthrow": CheckboxInput(attrs={
                'id': 'wisdom_savingthrow',
                'class':"point"
            }),
            "charisma_savingthrow": CheckboxInput(attrs={
                'id': 'charisma_savingthrow',
                'class':"point"
            }),
            "acrobatic": CheckboxInput(attrs={
                'id': 'acrobatic',
                'class':"point"
            }),
            "perception": CheckboxInput(attrs={
                'id': 'perception',
                'class':"point"
            }),
            "survival": CheckboxInput(attrs={
                'id': 'survival',
                'class':"point"
            }),
            "performance": CheckboxInput(attrs={
                'id': 'performance',
                'class':"point"
            }),
            "intimidation": CheckboxInput(attrs={
                'id': 'intimidation',
                'class':"point"
            }),
            "history": CheckboxInput(attrs={
                'id': 'history',
                'class':"point"
            }),
            "sleightOfHand": CheckboxInput(attrs={
                'id': 'sleightOfHand',
                'class':"point"
            }),
            "arcane": CheckboxInput(attrs={
                'id': 'arcane',
                'class':"point"
            }),
            "medicine": CheckboxInput(attrs={
                'id': 'medicine',
                'class':"point"
            }),
            "deception": CheckboxInput(attrs={
                'id': 'deception',
                'class':"point"
            }),
            "nature": CheckboxInput(attrs={
                'id': 'nature',
                'class':"point"
            }),
            "insight": CheckboxInput(attrs={
                'id': 'insight',
                'class':"point"
            }),
            "investigation": CheckboxInput(attrs={
                'id': 'investigation',
                'class':"point"
            }),
            "religion": CheckboxInput(attrs={
                'id': 'religion',
                'class':"point"
            }),
            "stealth": CheckboxInput(attrs={
                'id': 'stealth',
                'class':"point"
            }),
            "persuasion": CheckboxInput(attrs={
                'id': 'persuasion',
                'class':"point"
            }),
            "animalHandling": CheckboxInput(attrs={
                'id': 'animalHandling',
                'class':"point"
            }),
            "proficiencies": Textarea(attrs={
                'id': 'proficiencies',
                'style': 'min-width: 290px; max-width: 290px;min-height: 345px; max-height: 345px;'
                         'border: none; display: block;outline: none;background-color: transparent;'
            }),
            "armourclass": NumberInput(attrs={
                'id': 'armourclass',
                'class': "armorcl"
            }),
            "speed": NumberInput(attrs={
                'id': 'speed',
                'class': "speedIndexa"
            }),
            "hitPointsMax": NumberInput(attrs={
                'id': 'hitPointsMax',
                'style':'width: 150px;border: none;outline: none;background-color: transparent;'
            }),
            "hitPoints": NumberInput(attrs={
                'id': 'hitPoints',
                'style':'width: 282px;border: none;outline: none;text-align: center;font-size: 50px;background-color: transparent;'
            }),
            "temporaryHitPoints": NumberInput(attrs={
                'id': 'temporaryHitPoints',
                'style': 'width: 286px;height: 86px;border: none;outline: none;text-align: center;font-size: 50px;background-color: transparent;'
            }),
            "hitDice":  forms.Select(attrs={'choices':'dice_choices','id': 'hitDice', 'style': 'width: 75px;height: 50px;border: none;outline: none;text-align: center;font-size: 20px;background-color: transparent;'}),
            "attackundspells": Textarea(attrs={
                'id': 'attackundspells',
                'style': 'min-width: 278px; max-width: 278px;min-height: 47px; max-height: 47px;'
                         'border: 2px solid #a6a6a6;border-radius: 10px; display: block;'
                         'outline: none;'
                         'background-image: repeating-linear-gradient(rgb(255, 255, 255) 1px, rgb(255, 255, 255) 14px, rgb(218, 218, 218) 1px, rgb(218, 218, 218) 15px);'
                         'line-height: inherit;'
            }),
            "equipment": Textarea(attrs={
                'id': 'equipment',
                'style': 'min-width: 290px; max-width: 290px;min-height: 320px; max-height: 320px;'
                         'border: none; display: block;outline: none;background-color: transparent;'
            }),

            "platinum": NumberInput(attrs={
                'id': 'platinum',
                'class':"gold"
            }),
            "electrum": NumberInput(attrs={
                'id': 'electrum',
                'class':"gold"
            }),
            "golden": NumberInput(attrs={
                'id': 'golden',
                'class':"gold"
            }),
            "silver": NumberInput(attrs={
                'id': 'silver',
                'class':"gold"
            }),
            "copper": NumberInput(attrs={
                'id': 'copper',
                'class':"gold"
            }),
            "age": TextInput(attrs={
                'id': 'age',
                'class': "test"
            }),
            "height": TextInput(attrs={
                'id': 'height',
                'class': "test"
            }),
            "weight": TextInput(attrs={
                'id': 'weight',
                'class': "test"
            }),
            "eyeColor": TextInput(attrs={
                'id': 'eyeColor',
                'class': "test"
            }),
            "skinColor": TextInput(attrs={
                'id': 'skinColor',
                'class': "test"
            }),
            "hairColor": TextInput(attrs={
                'id': 'hairColor',
                'class': "test"
            }),
            "appearance":ClearableFileInput(),
            "backstory": Textarea(attrs={
                'id': 'backstory',
                'style': 'min-width: 100%; max-width: 100%;min-height: 621px; max-height: 621px;'
                         'border: none; display: block;outline: none;background-color: transparent;'
            }),
            "allies": Textarea(attrs={
                'id': 'allies',
                'class': "secondеTrip"
            }),
            "additionalfeatures": Textarea(attrs={
                'id': 'additionalfeatures',
                'class': "secondеTrip"
            }),
            "treasure": Textarea(attrs={
                'id': 'treasure',
                'class': "secondеTrip"
            }),
            "spellcastingClass": TextInput(attrs={
                'id': 'spellcastingClass',
                'class': "nameText"
            }),
            "spellcastingAbilityScore": forms.Select(attrs={'choices': 'spellcastingAbility', 'id': 'spellcastingAbilityScore','style': 'width: 150px;height: 50px;border: black solid 2px; border-radius: 5px;outline: none;text-align: center;font-size: 25px;background-color: transparent;'}),

        };
