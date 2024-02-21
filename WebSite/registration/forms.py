from.models import Character
from django.forms import ModelForm, TextInput, NumberInput, Textarea,BooleanField,CheckboxInput,ChoiceField
from django import forms
class CharacterForm(ModelForm):
    class Meta:
        model = Character
        fields = ['name','characterClass','race','backstorys','сharacterPlayer','worldviews','experience','level','personalTraits','ideals','bonds','flaws','features','strength','dexterity','constitution','intelligence','wisdom','charisma','inspiration','strength_savingthrow','dexterity_savingthrow','constitution_savingthrow','intelligence_savingthrow','wisdom_savingthrow','charisma_savingthrow','acrobatic','athletics','perception','survival','performance','intimidation','history','sleightOfHand','arcane','medicine','deception','nature','insight','investigation','religion','stealth','persuasion','animalHandling','proficiencies','armourclass','speed','hitPoints','hitPointsMax','temporaryHitPoints','hitDice']

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
                'class': "test"
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
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'

            }),
            "strength_savingthrow": CheckboxInput(attrs={
                'id': 'strength_savingthrow',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "dexterity_savingthrow": CheckboxInput(attrs={
                'id': 'dexterity_savingthrow',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "constitution_savingthrow": CheckboxInput(attrs={
                'id': 'constitution_savingthrow',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "intelligence_savingthrow": CheckboxInput(attrs={
                'id': 'intelligence_savingthrow',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "wisdom_savingthrow": CheckboxInput(attrs={
                'id': 'wisdom_savingthrow',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "charisma_savingthrow": CheckboxInput(attrs={
                'id': 'charisma_savingthrow',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "acrobatic": CheckboxInput(attrs={
                'id': 'acrobatic',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "perception": CheckboxInput(attrs={
                'id': 'perception',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "survival": CheckboxInput(attrs={
                'id': 'survival',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "performance": CheckboxInput(attrs={
                'id': 'performance',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "intimidation": CheckboxInput(attrs={
                'id': 'intimidation',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "history": CheckboxInput(attrs={
                'id': 'history',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "sleightOfHand": CheckboxInput(attrs={
                'id': 'sleightOfHand',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "arcane": CheckboxInput(attrs={
                'id': 'arcane',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "medicine": CheckboxInput(attrs={
                'id': 'medicine',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "deception": CheckboxInput(attrs={
                'id': 'deception',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "nature": CheckboxInput(attrs={
                'id': 'nature',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "insight": CheckboxInput(attrs={
                'id': 'insight',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "investigation": CheckboxInput(attrs={
                'id': 'investigation',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "religion": CheckboxInput(attrs={
                'id': 'religion',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "stealth": CheckboxInput(attrs={
                'id': 'stealth',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "persuasion": CheckboxInput(attrs={
                'id': 'persuasion',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
            }),
            "animalHandling": CheckboxInput(attrs={
                'id': 'animalHandling',
                'style': 'width: 20px; height: 20px;border-radius: 30px;border: 2px solid black;'
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
                'style': 'width: 286px;height: 96px;border: none;outline: none;text-align: center;font-size: 50px;background-color: transparent;'
            }),
            "hitDice":  forms.Select(attrs={'choices':'dice_choices','id': 'hitDice', 'style': 'width: 100px;height: 100px;border: none;outline: none;text-align: center;font-size: 50px;background-color: transparent;'})

        }
