$(function() {
    function Index(modifierClass) {
       var isChecked = modifierClass.getCheckProf();

        var selectedValue = modifierClass.getAtribution();

        let Type=0;
        if(selectedValue === '0') {
           // AttackAndSpells.push($('#profienc-modifire'));
        }
        else if(selectedValue === '1') {
          Type='strengthmodifier';
        }
        else if(selectedValue === '2') {
           Type='dexteritymodifier';
        }
        else if(selectedValue === '3') {
           Type='constitutionmodifier';
        }
        else if(selectedValue === '4') {
            Type='intelligencemodifier';
        }
        else if(selectedValue === '5') {
           Type='wisdommodifier';
        }
        else if(selectedValue === '6') {
            Type='charismamodifier';
        }
        var modifier = parseInt($('.' + Type).text());
        var profiency = parseInt($('.profiency').text());
        var mid = parseInt(modifierClass.getModifier());
        if(Type==0)
        {
            var index = isChecked ?mid  + profiency : mid;
        }
        else{
             var index = isChecked ?mid + modifier + profiency : mid + modifier;
        }


        if (index > 0) {
            index = "+" + index;
        }
        if (index < 0) {
            index = "" + index;
        }
        if (index == 0) {
            index = "" + index;
        }

        console.log(index);
        return index;
    }
    function updateIndex(imageId, indexClass, modifierClass) {
        var $savingthrowImage = $('#' + imageId);
        var isChecked = $savingthrowImage.data('checked');
        modifirecalcutin();
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

    function midIndex(modifierClass){
        $('.savingthrowequil').text(8 + (parseInt($('.' + modifierClass).text())) + (parseInt($('.profiency').text())))
            $('.atackbonustext').text('+' + ((parseInt($('.' + modifierClass).text())) + (parseInt($('.profiency').text()))))
    }
    function modifIndex() {
        if($('#spellcastingAbilityScore').val() == "0") {
            midIndex('intelligencemodifier');
        }
        if($('#spellcastingAbilityScore').val() == "1") {
            midIndex('wisdommodifier');
        }
        if($('#spellcastingAbilityScore').val() == "2") {
            midIndex('charismamodifier');
        }
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
    function AtIndex(){
        updateIndex()
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
       modifIndex()
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
        -
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
        modifIndex();
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
        modifIndex();
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
        modifIndex();
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
        let InputField=document.createElement("input");
        InputField.className ='InputFieldStyle';
        var inputFieldId = 'InputField' + i + '-' + SpellCounter; // Генерируем уникальный ID для каждого поля
        InputField.id = inputFieldId;
        InputField.addEventListener('click', function(event,) {
            openWindow(event);
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
    var changedValue = event.target.value;
    for (let i =0;i<AllInputFields.length;i++){

        if (InputField.id===AllInputFields[i].id){
            var Index = Math.floor(i / 3);

            console.log(changedValue);
            if(event.target.id=="profienc-checkbox")
            {

                  let isChecked = event.target.checked;
                AttackAndSpells[Index].setCheckProf(isChecked ? 1 : 0);
            }
            if(event.target.id=="profienc-modifire")
            {
                     AttackAndSpells[Index].setModifier(changedValue);
            }
            if(event.target.id=="attackroll")
            {
                AttackAndSpells[Index].setDamage(changedValue);
            }
            if(event.target.id=="windowSelect")
            {
               AttackAndSpells[Index].setAtributmodifier(changedValue);
            }
            if(event.target.id=="attacknametext")
            {
                 AttackAndSpells[Index].setName(changedValue);
            }


        }
    }

}
    function openWindow(event){
        let target = event.target;
        currentRow=target;
        var openPanel = document.getElementById('window');
        openPanel.style.display = 'block';
        setTimeout(function() {openPanel.style.opacity = '1';}, 100);
        var backGround = document.getElementById('background');
        backGround.style.display = 'block';
        setTimeout(function() {backGround.style.opacity = '0.7';}, 100); // Добавляем небольшую задержку перед установкой прозрачности
        let InputField = document.getElementsByClassName('winowtempl');
        for (let i =0;i<InputField.length;i++)
        {
            InputField[i].addEventListener('change', function(event,) {
            handleInputChange(event,target);
        });
        }


    }
    function closeWindow()
    {
        var openPanel = document.getElementById('window');
        openPanel.style.opacity = '0'; // Устанавливаем прозрачность в 0
         let InputFields = document.getElementsByClassName('winowtempl');
        for (let i = 0; i < InputFields.length; i++) {
        let inputField = InputFields[i];
        inputField.removeEventListener('change', handleInputChange);
        }
        setTimeout(function() {openPanel.style.display = 'none';}, 500);

        var backGround = document.getElementById('background');
        backGround.style.opacity = '0'; // Устанавливаем прозрачность в 0
        setTimeout(function() {backGround.style.display = 'none';}, 500);
         modifirecalcutin();
    }




    $('#close-button').click(function (){
    closeWindow();

});
    function modifirecalcutin()
    {
        for(let i=0;i<AllInputFields.length;i++)
        {
            if(AllInputFields[i]==currentRow)
            {
                if(i%3==0)
                {
                    AllInputFields[i].value=AttackAndSpells[Math.floor(i/3)].getName();
                     AllInputFields[i+1].value=Index(AttackAndSpells[Math.floor(i/3)]);
                     AllInputFields[i+2].value= AttackAndSpells[Math.floor(i/3)].getDamage();
                }
                if(i%3==1)
                {
                      AllInputFields[i-1].value=AttackAndSpells[Math.floor(i/3)].getName();
                     AllInputFields[i].value=Index(AttackAndSpells[Math.floor(i/3)]);
                     AllInputFields[i+1].value= AttackAndSpells[Math.floor(i/3)].getDamage();

                }
                 if(i%3==2)
                 {
                          AllInputFields[i-2].value=AttackAndSpells[Math.floor(i/3)].getName();
                     AllInputFields[i-1].value=Index(AttackAndSpells[Math.floor(i/3)]);
                     AllInputFields[i].value= AttackAndSpells[Math.floor(i/3)].getDamage();
                 }
            }
        }

    }


    $('#background').click(function ()
    {
        closeWindow();
    });





    $('#windowSelect').change(function(){
        var selectedValue = $(this).val();
        if(selectedValue === '0') {
            $('.windowSelector').css('width', '50%');
            $('.profiencycheck').css('display','none');
            $('.selectorandother').css('justify-content','left');
            $('.modifire').css('width', '50%');


        } else {
            $('.windowSelector').css('width', '30%');
            $('.profiencycheck').css('display','block');
            $('.selectorandother').css('justify-content','space-around');
            $('.modifire').css('width', '30%');
        }
    });
    $('#spellcastingAbilityScore').change(function (){
        modifIndex();
    })
});