//загрузка данных карты из json

var number = document.getElementById("number");
var cardTitle = document.getElementById("card-title");
var cardId = document.getElementById("card-id");

var res1 = document.getElementById("res1");
var res2 = document.getElementById("res2");
var res3 = document.getElementById("res3");
var res4 = document.getElementById("res4");

//таблица из json


var tNumber = document.getElementById("number-e");
var tCardId = document.getElementById("link-e");

var tRes1 = document.getElementById("r1");
var tRes2 = document.getElementById("r2");
var tRes3 = document.getElementById("r3");


//var cards =

//var results = [number, cardTitle, cardId, res1, res2, res3, res4];
i=0;

var tResults = [tNumber, tCardId, tRes1, tRes2, tRes3];

var i=0;
var j=0;


var cardRequest = new XMLHttpRequest();
cardRequest.open('GET', '/files/card.json');
cardRequest.onload = function() {
    var cardInfo = JSON.parse(cardRequest.responseText);
    //console.log(cardInfo);
    html_insert(cardInfo);

};
cardRequest.send();

//function get_card_results(data) {
//    for (i==0; i<=data.length; i++) {
//
//    }}

function html_insert(data){

    // первая карта
    //var string = data[0].number;
    //number.insertAdjacentHTML('beforeend', string);
    //string = data[0].cardTitle;
    //cardTitle.insertAdjacentHTML('beforeend', string);
    //string = data[0].cardId;
    //cardId.insertAdjacentHTML('beforeend', string);

    //var jsonResults = [data[0].number, data[0].cardTitle, data[0].cardId,
    //    data[0].result1,data[0].result2, data[0].result3, data[0].result4];
    //
    //for (i==0; i<=results.length; i++) {
    //    results[i].insertAdjacentHTML('beforeend', jsonResults[i]);
    //}


    var jsonTableResults = [data[0].number, data[0].cardId, data[0].result1,
        data[0].result2, data[0].result3];

    for (j==0; j<=tResults.length; j++) {
        tResults[j].insertAdjacentHTML('beforeend', jsonTableResults[j]);
    }


}
    //string = data[0].result1;
    //res1.insertAdjacentHTML('beforeend', string);
    //string = data[0].result2;
    //res2.insertAdjacentHTML('beforeend', string);
    //string = data[0].result3;
    //res3.insertAdjacentHTML('beforeend', string);
    //string = data[0].result4;
    //res4.insertAdjacentHTML('beforeend', string);

// открытие меню чекбоксов

//function open_menu(id){
//    display = document.getElementById(id).style.display;
//
//    if(display=='none') {
//        document.getElementById(id).style.display='block';
//    }
//    else {
//        document.getElementById(id).style.display='none';
//    }
//}

//function open_menu(id) {
//    display = document.getElementById(id).style.display;
//    document.getElementById(id).style.display='block';
//}
//
//function close_menu(id) {
//    display = document.getElementById(id).style.display;
//
//    if (display=='block') {
//        document.getElementById(id).style.display='hide';
//    }


//Клонирование карт


//function open_and_close(){
//    var points_menu = document.getElementById('points-menu');
//    var section = document.getElementsByTagName('section');
//    points_menu.onmouseenter = function(e) {
//        document.getElementById('menu').style.display='block';
//    };
//
//    //section.onclick = function(e) {
//    //    document.getElementById('menu').style.display='none';
//    //}
//
//    points_menu.onmouseleave = function(e) {
//        document.getElementById('menu').style.display='none';
//    }
//}

function open_and_close(id) {
    display = document.getElementById(id).style.display;

    if(display=='none') {
        document.getElementById(id).style.display='block';
    }
    else {
        document.getElementById(id).style.display='none';
    }
}

function stay_visiable(){
    var menu = document.getElementById('menu');
    points_menu.onmouseover = function(e) {
        document.getElementById(menu).style.display='block';
    };
}

function tool_expand(id) {
    var menu = document.getElementById(id).style.height;

}

function view_on_click(id1, id2) {
    display1 = document.getElementById(id1).style.display;
    display2 = document.getElementById(id2).style.display;

    if(display1=='none') {
        document.getElementById(id1).style.display1='block';
        document.getElementById(id2).style.display2='hide';
    }
    //else {
    //    document.getElementById(id1).style.display='none';
    //    document.getElementById(id2).style.display1='block';
    //}
}

//
//open_and_close('menu');
//stay_visiable();

