function game1(){
    var x = document.getElementById("game1");
    x.classList.toggle('game_layer');
}

function game2(){
    var x = document.getElementById("game2");
    x.classList.toggle('game_layer');
}


$(document).ready(function(){

    $("#maze").load('/home/mygame/mygame.html');

});