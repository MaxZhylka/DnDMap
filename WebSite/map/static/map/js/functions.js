
    function togglePanel() {
    let panel = document.getElementById('panel');
    let temp = String(panel.style.left);
    if ( panel.style.left!=='0px') {
        panel.style.left = '0';
    }

    else {
        panel.style.left = '-480px';
    }
}

function OpenNews(el,News)
{
//Создание блока Новостей
        let FullNews= document.createElement("div");
        FullNews.className="Full_News";
//Объявления тега картинки
        let FullNewsImage= document.createElement("img");
        FullNewsImage.className="Secondary_News_Img";
     if(News[el].secondaryImage==0) {
         FullNewsImage.src=News[el].mainImage;
     }
     else {
         FullNews.src=News[el].secondaryImage;
     }

//Создание полей текста и контейнера для них
     let HeaderText=document.createElement("div");
     HeaderText.className="Secondary_Header";
     if(News[el].secondaryHeader==0)
     {
          HeaderText.innerText=News[el].mainHeader;
     }
     else
     {
         HeaderText.innerText=News[el].secondaryHeader;
     }
    let Text=document.createElement("div");
     Text.className="Secondary_Text";
     if(News[el].secondaryText==0)
     {
          Text.innerText=News[el].mainText;
     }
     else
     {
         Text.innerText=News[el].secondaryText;
     }
     //Флекс контейнер текста
     let FullTextContainer= document.createElement("div");
     FullTextContainer.className="Secondary_Flex_Container";
     FullTextContainer.appendChild(HeaderText);
     FullTextContainer.appendChild(Text);

     //Флекс контейнер для автора и даты, автор и дата
     let authorAndTime=document.createElement("div");
     authorAndTime.className='Author_Flex_Container';
     let Author=document.createElement("div");
     Author.className='AuthorText';
     Author.innerText="Автор: "+News[el].author;
     let Date=document.createElement("div");
     Date.className='Date';
     Date.innerText=News[el].date;
     authorAndTime.appendChild(Author);
     authorAndTime.appendChild(Date);
     //Задний фон
      let BackGround=document.createElement("div");
     BackGround.className="BG_Style";
     BackGround.addEventListener("click", function() {
                CloseNews(FullNews, BackGround);
});
//Добавление элементов на задний фон
     FullNews.appendChild(FullNewsImage);
     FullNews.appendChild(FullTextContainer);
     FullNews.appendChild(authorAndTime);
 let body=document.getElementById("body");
 body.appendChild(BackGround);
 body.appendChild(FullNews);

}
function CloseNews(el,BackGround) {
    el.style.display="none";
    BackGround.style.display="none";
}

document.addEventListener('click', function(event) {
    let panel = document.getElementById('panel');
    let targetElement = event.target; // Элемент, на который был произведен клик
    let excludedClasses = [
        'News-btn',
        'News-img',
        'BG_Style',
        'Secondary_News_Img',
        'Full_News',
        'Secondary_Flex_Container',
        'Secondary_Text',
        'Secondary_Header',
        'Date',
        'AuthorText',
        'Author_Flex_Container'
    ];

    if (!panel.contains(targetElement) && !excludedClasses.includes(targetElement.className)) {
        panel.style.left = '-480px'; // Закрываем панель
    }
});
    function moveToCity() {
    let input = document.getElementById('search-box').value.trim().toLowerCase(); // Получаем текущий ввод пользователя
    let cityFound = Cities.find(function(city) {
        return city[1].toLowerCase() === input;
    });

    if (cityFound) {
        let coordinates = cityFound[0].split(',').map(function(item) { return parseFloat(item.trim()); });
        map.flyTo(coordinates, 4);
    } else {
        console.log("Город не найден.");
    }
}


   function suggestCities() {
    let input = document.getElementById('search-box').value.toLowerCase(); // Получаем текущий ввод пользователя
    let suggestionsPanel = document.getElementById('suggestions');
    suggestionsPanel.innerHTML = ''; // Очищаем предыдущие предложения

    if (input.length > 0) {
        // Фильтруем массив Cities, чтобы найти соответствующие названия городов
        let filteredCities = Cities.filter(function(city) {
            return city[1].toLowerCase().startsWith(input);
        });

        // Создаем предложения для каждого отфильтрованного города
        filteredCities.forEach(function(city) {
            let div = document.createElement('div');
            div.innerHTML = city[1]; // Используем второй элемент массива для названия города
            div.onclick = function() {
                document.getElementById('search-box').value = city[1]; // Заполняем поле ввода выбранным названием города
                suggestionsPanel.innerHTML = ''; // Очищаем предложения
                // Здесь можно добавить вызов функции для фокусировки карты на маркере, например:
                focusOnMarker(city[0]); // Предполагается, что функция focusOnMarker будет определена для обработки фокусировки карты
            };
            suggestionsPanel.appendChild(div);
        });
    }
}

function focusOnMarker(coordinatesStr) {
    let coordinates = coordinatesStr.split(',').map(function(item) { return parseFloat(item.trim()); });

    map.flyTo(coordinates, 4);
}

       function CreateAndDrawCities(Cities, wheelIcon) {
    for (let el of Cities) {
        wheelIcon.options.iconUrl =el[2];
        let str = el[0];
        let numbers = str.split(',').map(function(item) { return parseFloat(item.trim()); });

        L.marker(numbers, {icon: wheelIcon}).addTo(map).bindPopup(el[1]);
    }
}

function  CreateAndDrawRoads(Road,Roads)
{
    for(let el of Road)
    {
        let coordinates= JSON.parse(el[0]);
        //console.log(coordinates);
        let road={
            "type": "LineString",
            "coordinates": coordinates

        }
        Roads.push(road);
        L.geoJSON(road, {style: function (feature) {return {color: '#808080',weight: 5};
                    }
                }).addTo(map);
    }
}

       // map.eachLayer(function(layer) {
//     if (layer instanceof L.Marker) {
//         layer.on('click', function(e) {
//             let latlng = e.latlng; //
//
//             coordinatesArray.push([latlng.lng, latlng.lat]);
//             console.log(JSON.stringify(coordinatesArray));
//         });
//     }
// });
    // map.on('click', function(e) {
//     let latlng = e.latlng; // Получаем координаты клика на карте
//     // Округляем координаты до 4 знаков после запятой и добавляем их в массив
//     coordinatesArray.push([latlng.lng, latlng.lat]);
//     console.log(JSON.stringify(coordinatesArray));
// });
//
// map.on('contextmenu', function(e) {
//     let latlng = e.latlng; // Получаем координаты клика на карте
//     let roundedLat = latlng.lat.toFixed(4); // Округляем широту
//     let roundedLng = latlng.lng.toFixed(4); // Округляем долготу
//     let roundedCoords = [roundedLat, roundedLng]; // Формируем массив округленных координат
//     // Добавляем округленные координаты клика на карту в массив или делаем с ними что-то другое
//     alert(roundedCoords); // Выводим округленные координаты в виде всплывающего сообщения
// });
