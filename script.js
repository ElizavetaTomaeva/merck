//загрузка данных карты из json

var number = document.getElementById("number");
var cardTitle = document.getElementById("card-title");
var cardId = document.getElementById("card-id");

var res1 = document.getElementById("res1");
var res2 = document.getElementById("res2");
var res3 = document.getElementById("res3");
var res4 = document.getElementById("res4");

var results = [res1, res2, res3, res4];

var cardRequest = new XMLHttpRequest();
cardRequest.open('GET', '/files/card.json');
cardRequest.onload = function() {
    var cardInfo = JSON.parse(cardRequest.responseText);
    //console.log(cardInfo);
    htmlInsert(cardInfo);
};
cardRequest.send();

function htmlInsert(data){
    var string = data.number;
    number.insertAdjacentHTML('beforeend', string);
    string = data.cardTitle;
    cardTitle.insertAdjacentHTML('beforeend', string);
    string = data.cardId;
    cardId.insertAdjacentHTML('beforeend', string);

    string = data.result1;
    res1.insertAdjacentHTML('beforeend', string);
    string = data.result2;
    res2.insertAdjacentHTML('beforeend', string);
    string = data.result3;
    res3.insertAdjacentHTML('beforeend', string);
    string = data.result4;
    res4.insertAdjacentHTML('beforeend', string);

}

// открытие меню чекбоксов

function open_menu(id){
    display = document.getElementById(id).style.display;

    if(display=='none') {
        document.getElementById(id).style.display='block';
    }
    else {
        document.getElementById(id).style.display='none';
    }
}
