//-------게임 시작 버튼--------
function game(){
    var sb = document.getElementById('startbtn');
    sb.classList.toggle('startgame');
    startGame();
}

//-----게임 시작 함수---------
function startGame(){
    myPlayer = new player(5,'blue',10,10);
    myMap = new map(100);    //벽 생성(갯수)
    myEndPoint = new endPoint('red',5);
    myGameArea.start();
}
myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = 1700;
        this.canvas.height = 700;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");

        this.interval = setInterval(updateGameArea,20);
        //플레이어 이동하기

        window.addEventListener('keydown',function(e){
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup',function(e){
            myGameArea.key = false;
        });
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width,this.canvas.height);
    }
}

//--------플레이어 생성 함수----------
function player(r,color, x, y){
    this.r = r
    this.x = x;
    this.y = y;
    this.xMove = 0;
    this.yMove = 0;
    this.update = function(){
        //플레이어 만들기
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.beginPath();
        ctx.arc(10+this.x, 10+this.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = "yellow";
        ctx.fill();
        // 시야 가리기
        ctx.beginPath();
        ctx.strokeStyle = "rgba(40,40,40,1)";
        ctx.lineWidth = 1800;
        ctx.arc(10+this.x, 10+this.y,1000, 0, 2*Math.PI);
        ctx.stroke();
    }
    this.playerMove = function(){
        this.x += this.xMove;
        this.y += this.yMove;
    }
}

// ------맵 생성 함수
function map(num){
    this.blockNum = num;    // 벽의 갯수
    this.blockX =[];         // 벽의 x좌표 난수 생성
    this.blockY =[];         // 벽의 x좌표 난수 생성
    this.blockW =[];         // 벽의 x좌표 난수 생성
    this.blockH =[];         // 벽의 x좌표 난수 생성
    for(i=0; i<this.blockNum; i++){
        this.blockX[i] = Math.floor(Math.random()*1700);
        this.blockY[i] = Math.floor(Math.random()*700);
        this.blockW[i] = Math.floor(Math.random()*200);
        this.blockH[i] = Math.floor(Math.random()*200);
        console.log(this.blockX[i],this.blockY[i],this.blockW[i],this.blockH[i]);
    }
    this.update = function(){
        //맵 생성
        for(i=0; i<myMap.blockNum; i++){
            ctx = myGameArea.context;
            ctx.beginPath();
            ctx.fillStyle = "rgba(10,10,10,1)";
            ctx.fillRect(myMap.blockX[i],myMap.blockY[i],myMap.blockW[i],myMap.blockH[i])
        }
    }
}

//-------End Point 생성 함수------
function endPoint(color,r){
    // this.endX = Math.floor(Math.random()*1500)+200;
    // this.endY = Math.floor(Math.random()*700);
    this.r = r
    this.update = function(){
        ctx = myGameArea.context
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(1690, 690,this.r,0,2*Math.PI);
        ctx.fill();
    }
}

//----------플레이어,맵 화면 출력 함수---------
function updateGameArea(){
    myGameArea.clear();
    //---맵생성
    myMap.update();
    //플레이어 생성
    myPlayer.playerMove();
    if(myGameArea.key && myGameArea.key == 37) {
        if(myPlayer.x < 0-myPlayer.r) myGameArea.key = false;
        moveLeft() ;
    }
    if(myGameArea.key && myGameArea.key == 38) {
        if(myPlayer.y < 0-myPlayer.r) myGameArea.key = false;
        moveUp(); 
    }
    if(myGameArea.key && myGameArea.key == 39) { 
        if(myPlayer.x > myGameArea.canvas.width-25) myGameArea.key = false;
        moveRight();
    }
    if(myGameArea.key && myGameArea.key == 40) {
        if(myPlayer.y > myGameArea.canvas.height-25) myGameArea.key = false;
        moveDown();
    }
    if(!myGameArea.key){clearmove()}
    myEndPoint.update();
    myPlayer.update();
}
//---------플레이어 이동 함수---------
function moveRight(){myPlayer.xMove = +2;}
function moveLeft() {myPlayer.xMove = -2;}
function moveUp()   {myPlayer.yMove = -2;}
function moveDown() {myPlayer.yMove = +2;}
function clearmove(){myPlayer.xMove = 0; myPlayer.yMove = 0;}

