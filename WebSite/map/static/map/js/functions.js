
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


document.addEventListener('click', function(event) {
    let panel = document.getElementById('panel');
    let targetElement = event.target; // Элемент, на который был произведен клик

    console.log(targetElement);
    // Проверяем, произошел ли клик вне панели и кнопки открытия панели
    if (!panel.contains(targetElement) && targetElement.className !== 'News-btn'&& targetElement.className !== 'News-img') {
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
