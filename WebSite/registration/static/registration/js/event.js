$(function() {
    function updateIndex(imageId, indexClass, modifierClass) {
        var $savingthrowImage = $('#' + imageId);
        var isChecked = $savingthrowImage.data('checked');
        var modifier = parseInt($('.' + modifierClass).text());
        var profiency = parseInt($('.profiency').text());
        var index = isChecked ?modifier + profiency : modifier;
        if (index > 0) {
            index = "+" + index;
        }
        if (index < 0) {
            index = "" + index;
        }
        if (index == 0) {
            index = "" + index;
        }
        $('.' + indexClass).text(index);
    }
    function passupdateIndex(imageId, indexClass,passIndexClass, modifierClass) {
        var $savingthrowImage = $('#' + imageId);
        var isChecked = $savingthrowImage.data('checked');
        var modifier = parseInt($('.' + modifierClass).text());
        var profiency = parseInt($('.profiency').text());
        var index = isChecked ?modifier + profiency : modifier;
        $('.' + passIndexClass).text(index + 10);
        if (index > 0) {
            index = "+" + index;
        }
        if (index < 0) {
            index = "" + index;
        }
        if (index == 0) {
            index = "" + index;
        }
        $('.' + indexClass).text(index);

    }
    function StrIndex() {
        updateIndex('strength-image', 'strIndex', 'strengthmodifier');
    }
    function DexIndex() {
        updateIndex('dexterity-image', 'dexIndex', 'dexteritymodifier');
    }
    function ConIndex() {
        updateIndex('constitution-image', 'conIndex', 'constitutionmodifier');
    }
    function IntIndex() {
        updateIndex('intelligence-image', 'intIndex', 'intelligencemodifier');
    }
    function WisIndex() {
        updateIndex('wisdom-image', 'wisIndex', 'wisdommodifier');
    }
    function ChaIndex() {
        updateIndex('charisma-image', 'chaIndex', 'charismamodifier');
    }
    function AcrIndex() {
        updateIndex('acrobatic-image', 'acrobaticIndex', 'dexteritymodifier');
    }
    function AthIndex() {
        updateIndex('athletics-image', 'athleticsIndex', 'strengthmodifier');
    }
    function PerIndex() {
        passupdateIndex('perception-image', 'perceptionIndex','passivwisdomIndex','wisdommodifier');
    }
    function SurIndex() {
        updateIndex('survival-image', 'survivalIndex', 'wisdommodifier');
    }
    function PerfIndex() {
        updateIndex('performance-image', 'performanceIndex', 'charismamodifier');
    }
    function IntiIndex() {
        updateIndex('intimidation-image', 'intimidationIndex', 'charismamodifier');
    }
    function HisIndex() {
        updateIndex('history-image', 'historyIndex', 'intelligencemodifier');
    }
    function SOHIndex() {
        updateIndex('sleightOfHand-image', 'sleightOfHandIndex', 'dexteritymodifier');
    }
    function ArcIndex() {
        updateIndex('arcane-image', 'arcaneIndex', 'intelligencemodifier');
    }
    function MedIndex() {
        updateIndex('medicine-image', 'medicineIndex', 'wisdommodifier');
    }
    function DecIndex() {
        updateIndex('deception-image', 'deceptionIndex', 'charismamodifier');
    }
    function NatIndex() {
        updateIndex('nature-image', 'natureIndex', 'intelligencemodifier');
    }
    function InsIndex() {
        updateIndex('insight-image', 'insightIndex', 'wisdommodifier');
    }
    function InvIndex() {
        updateIndex('investigation-image', 'investigationIndex', 'intelligencemodifier');
    }
    function RelIndex() {
        updateIndex('religion-image', 'religionIndex', 'intelligencemodifier');
    }
    function SteIndex() {
        updateIndex('stealth-image', 'stealthIndex', 'dexteritymodifier');
    }
    function PersIndex() {
        updateIndex('persuasion-image', 'persuasionIndex', 'charismamodifier');
    }
    function AhIndex() {
        updateIndex('animalHandling-image', 'animalHandlingIndex', 'wisdommodifier');
    }
    function all()
    {
       AthIndex();
       AcrIndex();
       SOHIndex();
       SteIndex();
       InvIndex();
       HisIndex();
       ArcIndex();
       NatIndex();
       RelIndex();
       PerfIndex();
       SurIndex();
       MedIndex();
       InsIndex();
       AhIndex();
       PerIndex();
       PerfIndex();
       IntiIndex();
       DecIndex();
       PersIndex();
    }

    function handleSavingThrowClick(attribute, imageId, savingThrowId, indexFunction) {
    var $savingthrowImage = $('#' + imageId);
    var isChecked = $savingthrowImage.data('checked');

    // Toggle image source
    $savingthrowImage.attr('src', function (_, oldSrc) {
        return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
    });

    $savingthrowImage.data('checked', !isChecked);
    indexFunction();
    $('#' + savingThrowId).prop('checked', function (_, checked) {
        return !checked;
    });
}


    $('[name="strength"]').on('input', function() {
        var strengthValue = parseInt($(this).val());
        if (!isNaN(strengthValue)) {
            if (strengthValue > 30) {
                $(this).val(30);
                strengthValue = 30;
            }
            if (strengthValue < 1) {
                $(this).val(1);
                strengthValue = 1;
            }
            strengthMod = Math.floor((strengthValue - 10) / 2);
            if (strengthValue >= 12) {
                $('.strengthmodifier').text("+" + Math.floor((strengthValue - 10) / 2));
            } else if (strengthValue <= 8) {
                $('.strengthmodifier').text(Math.floor((strengthValue - 10) / 2));
            } else {
                $('.strengthmodifier').text(Math.floor((strengthValue - 10) / 2));
            }
        }
        StrIndex();
        AthIndex();
    });
    $('[name="dexterity"]').on('input', function() {
        var dexterityValue = parseInt($(this).val());
        if (!isNaN(dexterityValue)) {
            if (dexterityValue > 30) {
                $(this).val(30);
                dexterityValue = 30;
            }
            if (dexterityValue < 1) {
                $(this).val(1);
                dexterityValue = 1;
            }
            if (dexterityValue >= 12) {
                $('.dexteritymodifier').text("+" + Math.floor((dexterityValue - 10) / 2));
                $('.initIndextext').text("+" + Math.floor((dexterityValue - 10) / 2));
            } else if (dexterityValue <= 8) {
                $('.dexteritymodifier').text(Math.floor((dexterityValue - 10) / 2));
                $('.initIndextext').text(Math.floor((dexterityValue - 10) / 2));
            } else {
                $('.dexteritymodifier').text(Math.floor((dexterityValue - 10) / 2));
                $('.initIndextext').text(Math.floor((dexterityValue - 10) / 2));
            }
            if (dexterityValue == 30) {$('.initIndextext').css('font-size', '40');} else {$('.initIndex').css('font-size', '50px');}
        }
         DexIndex();
        AcrIndex();
        SOHIndex();
        SteIndex();
    });
    $('[name="constitution"]').on('input', function() {
        var constitutionValue = parseInt($(this).val());
        if (!isNaN(constitutionValue)) {
            if (constitutionValue > 30) {
                $(this).val(30);
                constitutionValue = 30;
            }
            if (constitutionValue < 1) {
                $(this).val(1);
                constitutionValue = 1;
            }
            if (constitutionValue >= 12) {
                $('.constitutionmodifier').text("+" + Math.floor((constitutionValue - 10) / 2));
            } else if (constitutionValue <= 8) {
                $('.constitutionmodifier').text(Math.floor((constitutionValue - 10) / 2));
            } else {
                $('.constitutionmodifier').text(Math.floor((constitutionValue - 10) / 2));
            }
        }
         ConIndex();
    });
    $('[name="intelligence"]').on('input', function() {
        var intelligenceValue = parseInt($(this).val());
        if (!isNaN(intelligenceValue)) {
            if (intelligenceValue > 30) {
                $(this).val(30);
                intelligenceValue = 30;
            }
            if (intelligenceValue < 1) {
                $(this).val(1);
                intelligenceValue = 1;
            }
            if (intelligenceValue >= 12) {
                $('.intelligencemodifier').text("+" + Math.floor((intelligenceValue - 10) / 2));
            } else if (intelligenceValue <= 8) {
                $('.intelligencemodifier').text(Math.floor((intelligenceValue - 10) / 2));
            } else {
                $('.intelligencemodifier').text(Math.floor((intelligenceValue - 10) / 2));
            }
        }
        IntIndex();
        InvIndex();
        HisIndex();
        ArcIndex();
        NatIndex();
        RelIndex();
    });
    $('[name="wisdom"]').on('input', function() {
        var wisdomValue = parseInt($(this).val());
        if (!isNaN(wisdomValue)) {
            if (wisdomValue > 30) {
                $(this).val(30);
                wisdomValue = 30;
            }
            if (wisdomValue < 1) {
                $(this).val(1);
                wisdomValue = 1;
            }
            if (wisdomValue >= 12) {
                $('.wisdommodifier').text("+" + Math.floor((wisdomValue - 10) / 2));
            } else if (wisdomValue <= 8) {
                $('.wisdommodifier').text(Math.floor((wisdomValue - 10) / 2));
            } else {
                $('.wisdommodifier').text(Math.floor((wisdomValue - 10) / 2));
            }
        }
        WisIndex();
        PerfIndex();
        SurIndex();
        MedIndex();
        InsIndex();
        AhIndex();
        PerIndex();
    });
    $('[name="charisma"]').on('input', function() {
        var charismaValue = parseInt($(this).val());
        if (!isNaN(charismaValue)) {
            if (charismaValue > 30) {
                $(this).val(30);
                charismaValue = 30;
            }
            if (charismaValue < 1) {
                $(this).val(1);
                charismaValue = 1;
            }
            if (charismaValue >= 12) {
                $('.charismamodifier').text("+" + Math.floor((charismaValue - 10) / 2));
            } else if (charismaValue <= 8) {
                $('.charismamodifier').text(Math.floor((charismaValue - 10) / 2));
            } else {
                $('.charismamodifier').text(Math.floor((charismaValue - 10) / 2));
            }
        }
        ChaIndex();
        PerfIndex();
        IntiIndex();
        DecIndex();
        PersIndex();

    });
    $('#inspiration-button').click(function() {
        $('#toggle-image').attr('src', function(_, oldSrc) {
            return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
        });
        $('#inspiration').prop('checked', function (_, checked) {
            return !checked;

        });
    });
    $('#secses0-image').click(function() {
        $(this).attr('src', function(_, oldSrc) {
            return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
        });
    });
    $('#secses1-image').click(function() {
        $(this).attr('src', function(_, oldSrc) {
            return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
        });
    });
    $('#secses2-image').click(function() {
        $(this).attr('src', function(_, oldSrc) {
            return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
        });
    });
    $('#failer0-image').click(function() {
        $(this).attr('src', function(_, oldSrc) {
            return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
        });
    });
    $('#failer1-image').click(function() {
        $(this).attr('src', function(_, oldSrc) {
            return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
        });
    });
    $('#failer2-image').click(function() {
        $(this).attr('src', function(_, oldSrc) {
            return oldSrc.includes('inspirone.png') ? "/static/registration/img/inspirtwo.png" : "/static/registration/img/inspirone.png";
        });
    });
    $('#hitPoints').on('input', function() {
        var maxHitValue = parseInt($('#hitPointsMax').val());
        var currentHitValue = parseInt($(this).val());
        if (currentHitValue > maxHitValue)
        {
            $(this).val(maxHitValue);
        }
    });
    $('[name="level"]').on('input', function() {
        var levelValue = parseInt($(this).val());
        if (!isNaN(levelValue)) {
        if (levelValue > 20) {
            $(this).val(20);
            levelValue = 20;
        }
        if (levelValue < 1) {
            $(this).val(1);
            levelValue = 1;
        }
        $('.vsegoIndex').text(levelValue);
        var proficiency = Math.floor(((levelValue - 1) / 4)) + 2;
        $('.profiency').text("+" + proficiency);
        StrIndex();
        DexIndex();
        ConIndex();
        IntIndex();
        WisIndex();
        ChaIndex();
        all();
        }

    });
    $('#strength-button').click(function() {
    handleSavingThrowClick("strength", "strength-image", "strength_savingthrow", StrIndex);
});
    $('#dexterity-button').click(function() {
    handleSavingThrowClick("dexterity", "dexterity-image", "dexterity_savingthrow", DexIndex);
});
    $('#constitution-button').click(function() {
        handleSavingThrowClick("constitution", "constitution-image", "constitution_savingthrow", ConIndex);
    });
    $('#intelligence-button').click(function() {
        handleSavingThrowClick("intelligence", "intelligence-image", "intelligence_savingthrow", IntIndex);
    });
    $('#wisdom-button').click(function() {
        handleSavingThrowClick("wisdom", "wisdom-image", "wisdom_savingthrow", WisIndex);
    });
    $('#charisma-button').click(function() {
        handleSavingThrowClick("charisma", "charisma-image", "charisma_savingthrow", ChaIndex);
    });
    $('#acrobatic-button').click(function() {
    handleSavingThrowClick("acrobatic", "acrobatic-image", "acrobatic", AcrIndex);
});
    $('#athletics-button').click(function() {
    handleSavingThrowClick("athletics", "athletics-image", "athletics", AthIndex);
});
    $('#perception-button').click(function() {
    handleSavingThrowClick("perception", "perception-image", "perception", PerIndex);
    });
    $('#survival-button').click(function() {
    handleSavingThrowClick("survival", "survival-image", "survival", SurIndex);
});
    $('#performance-button').click(function() {
    handleSavingThrowClick("performance", "performance-image", "performance", PerfIndex);

});
    $('#intimidation-button').click(function() {
    handleSavingThrowClick("intimidation", "intimidation-image", "intimidation", IntiIndex);

});
    $('#history-button').click(function() {
        handleSavingThrowClick("history", "history-image", "history", HisIndex);
    });
    $('#sleightOfHand-button').click(function() {
        handleSavingThrowClick("sleightOfHand", "sleightOfHand-image", "sleightOfHand", SOHIndex);
    });
    $('#arcane-button').click(function() {
        handleSavingThrowClick("arcane", "arcane-image", "arcane", ArcIndex);
    });
    $('#medicine-button').click(function() {
        handleSavingThrowClick("medicine", "medicine-image", "medicine", MedIndex)

    });
    $('#deception-button').click(function() {
        handleSavingThrowClick("deception", "deception-image", "deception", DecIndex)
    });
    $('#nature-button').click(function() {
        handleSavingThrowClick("nature", "nature-image", "nature", NatIndex)
    });
    $('#insight-button').click(function() {
        handleSavingThrowClick("insight", "insight-image", "insight", InsIndex)
    });
    $('#investigation-button').click(function() {
        handleSavingThrowClick("investigation", "investigation-image", "investigation", InvIndex)
    });
    $('#religion-button').click(function() {
        handleSavingThrowClick("religion", "religion-image", "religion", RelIndex)
    });
    $('#stealth-button').click(function() {
        handleSavingThrowClick("stealth", "stealth-image", "stealth", SteIndex)
    });
    $('#persuasion-button').click(function() {
        handleSavingThrowClick("persuasion", "persuasion-image", "persuasion", PersIndex)
    });
    $('#animalHandling-button').click(function() {
        handleSavingThrowClick("animalHandling", "animalHandling-image", "animalHandling", AhIndex)
    });
    $('[name="name"]').on('input', function() {
        var secName = parseInt($(this).val());
        $('.secondNameText').text(secName);
    });
    $("#character-image").on("click", function() {$("#id_appearance").click();});
    $("#id_appearance").on("change", function() {
    var input = this;
    if (input.files && input.files[0]) {
        if (input.files[0].size > 3000000) {
        alert("Размер файла превышает 3 МБайта. Выберите файл меньшего размера.");
        this.value = ""; // Очищаем поле ввода, чтобы пользователь мог выбрать другой файл
        return;
      }
      var reader = new FileReader();

      reader.onload = function(e) {
        // Обновляем атрибут src изображения
        $("#character-image").attr("src", e.target.result);
        $("#appearance").val(input.files[0].name);
      };

      // Читаем выбранный файл как Data URL
      reader.readAsDataURL(input.files[0]);
    }
  });
    $('#plus-button').click(function () {
    AttackAndSpells.push(new AttackFormul("","",""));
    var MarginIndex = 10*SpellCounter+15;
    var oneSpell= document.createElement("div");
    oneSpell.style.backgroundColor = '#00000';
    for(var i=0;i<3;i++)
    {
        var InputField=document.createElement("input");
        InputField.className ='InputFieldStyle';
        var inputFieldId = 'InputField' + i + '-' + SpellCounter; // Генерируем уникальный ID для каждого поля
        InputField.id = inputFieldId;
        InputField.addEventListener('change', function(event,) {
            handleInputChange(event,InputField); // Передаем ID поля в функцию обработки изменений
        });
        oneSpell.appendChild(InputField);
        AllInputFields.push(InputField);
    }
    AttackAndSpellsInputFields.push(oneSpell);
    SpellCounter++;
    var InputSpellContainer = document.getElementById('attackContainer');
    InputSpellContainer.appendChild(oneSpell);
    console.log(AttackAndSpells);
});
    $('#minus-button').click(function () {
    if (AttackAndSpellsInputFields.length > 0) {
        var removedSpell = AttackAndSpellsInputFields.pop();
        AttackAndSpells.pop();
        for(let i = 0;i<3;i++){
            AllInputFields.pop();
        }
        removedSpell.remove(); // Remove the spell from the DOM
        SpellCounter--; // Decrement the counter
    }
});
    function handleInputChange(event,InputField) {
    // Получаем значение, которое было изменено
    var changedValue = event.target.value;
    for (let i =0;i<AllInputFields.length;i++){

        if (InputField==AllInputFields[i]){
            var Index = Math.floor(i / 3);
            alert(i)

            if (i%3==1)
            {
                AttackAndSpells[Index].setName(changedValue);
            }
            alert(Index)
            if (i%3==2)
            {
                AttackAndSpells[Index].setModifier(changedValue);
            }
            if (i%3==0)
            {
                AttackAndSpells[Index].setDamage(changedValue);
            }
        }
    }

}
});