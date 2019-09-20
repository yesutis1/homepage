//-------게임 시작 버튼--------
function game(){
    var sb = document.getElementById('startbtn');
    sb.classList.toggle('startgame');
    startGame();
}

//-----게임 시작 함수---------
function startGame(){
    myGameArea.start();
    // myGrid = new block(10,10,'red',20,20);
    makeGrid(10,10);
}

var gameGrid = [];

myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 1000;
        this.canvas.height = 700;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");

        this.interval = setInterval(updateGameArea,20);
    }
}

function updateGameArea(){
    // myGrid.update();
}

function block(x,y,color,width,height){
    this.x = x;
    this.y = y;
    this.c = color;
    this.w = width;
    this.h = height;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}
function makeGrid(x,y) {
    this.x = x;
    this.y = y;
    // 간격, 컴포넌트의 크기, 색상
    var size=5, color = "#e3e3e3", arrObj;
    var rect = null;    //배열에 넣는 사각형 객체
    for(i=0;i<this.x;i++) {
        gameGrid.push([]);
        for(j=0;j<this.y;j++) {
            rect = new block(j*size,i*size,color,size,size);
            gameGrid[i].push(rect);
        }
    }
    for(var i=0;i<this.x;i++) {
        for(var j=0;j<this.y;j++) {
            arrObj = gameGrid[i][j];
            arrObj.update();
        }
    }
}
