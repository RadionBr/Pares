/*
1. Выбрать поле для игры
2. Заполнить игровое поле карточками (тегами li)
3. Сделать клик по карточкам
4. Сделать переворачивание карточек
	4.1. Размещаем картинки для каждой карточки
	4.2. Показываем картинку
5. Если выбрано 2 картинки проверяем на совпадения
	5.1. Если картинки совпадают то удаляем карточки
	5.2. Перевернуть все выбранные карточки
6. Если все карточки удалены вывести окно с перезапуском игры
7. При клике на кнопку перезагрузить обновляем страницу	
*/


var cardsField = document.querySelector("#cards");
var resetBlock = document.querySelector("#reset");
var resetBtn = document.querySelector("#reset-btn");

var images = [
	1,2,3,4,
	12,15,12,15,
	1,2,3,4,
	5,6,7,8,
	10,3,11,11,
	5,6,7,8,
	10,3,11
];

var deletedCards = 0;

var selected = [];

var pause = false;

// console.dir(cardsField);

var countCards = 26;

for(var i = 0; i < countCards; i = i + 1) {
	var li = document.createElement("li");
	li.id = i;
	cardsField.appendChild(li);
}

cardsField.onclick = function (event) {
	if(pause == false) {

	var element = event.target;

	if(element.tagName == "LI" && element.className != "active") {
		selected.push(element);
		element.className = "active"
		var img = images[element.id];
		element.style.backgroundImage = "url(images/" + img + ".png)";
		if(selected.length == 2) {
			pause = true;
			if( images[selected[0].id] == images[selected[1].id] ) {
				selected[0].style.visibility = "hidden";
				selected[1].style.visibility = "hidden";
				deletedCards = deletedCards + 2;
			}

			setTimeout(refreshCards, 600);


		}
	}
	

	}

}

function refreshCards() {
	for(var i = 0; i < countCards; i = i + 1) {
		cardsField.children[i].className = "";
		cardsField.children[i].style.backgroundImage = 'url("images/back.png")';
	}
	if(deletedCards == countCards) {
		resetBlock.style.display = "block"
	}
	selected = [];
	pause = false;
}

resetBtn.onclick = function() {
	location.reload();
}