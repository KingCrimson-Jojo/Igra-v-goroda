let cities = ["Санкт-Петербург", "Москва", "Саратов", "Омск", "Якутск", "Грозный", "Тверь", "Сочи", "Рязань", "Кострома", "Иркутск", "Краснодар", "Тюмень", "Самара", "Волгоград",
"Воронеж", "Новосибирск", "Анапа", "Хабаровск", "Красноярск", "Челябинск", "Екатеринбург", "Уфа", "Нижний Новгород", "Калининград", "Владивосток", "Ростов-на-Дону", "Пермь", "Киров", "Казань", "Оренбург", "Томск", "Ульяновск", "Брянск", "Архангельск", "Адыгея", "Кызыл", "Жиздра", "Заинск"];

function playCityGame() {

let currentPlayer = 1;
let previousCity = "А";
  
  while (true) {
    var city = prompt("Игрок " + currentPlayer + ", введите город:");

    if (city.charAt(0).toUpperCase() != previousCity.slice(-1).toUpperCase()) {
      alert("Город должен начинаться с буквы " + previousCity.slice(-1).toUpperCase() + "!");
      continue;

    }


    if (cities.indexOf(city) == -1) {
      alert("Такого города нет в списке!");
      continue;

    }

    cities.splice(cities.indexOf(city), 1);


    alert("Игрок " + currentPlayer + " назвал город " + city + "!");
    previousCity = city;
    currentPlayer = currentPlayer == 1 ? 2 : 1;

    if (cities.length == 0) {
      alert("Игра закончена! Нет больше городов в списке.");
      break;

    }
  }
}


playCityGame();