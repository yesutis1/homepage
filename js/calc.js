var calc_value="";  // 입력 값
var result_value;   // 결과 값
var input="";       // 입력 계산 처리

function calc(add){
    input = add.textContent;
    calc_value += input;
    history()
}
// 계산 버튼 입력

function history(){
    document.getElementById("demo").innerHTML=calc_value;
    if(input === "="){
        calc_value = calc_value.slice(0,-1);
        result();
    }
}
//입력값 처리

function result(){
    result_value =eval(calc_value);
    var el = document.getElementById("demo");
    el.innerHTML=calc_value+"="+result_value;
}
//결과 값 출력

function allClear(){
    calc_value="";
    result_value="";
    var el = document.getElementById("demo");
    el.innerHTML=calc_value;
}
//AC기능

function deleteText(){
    calc_value = calc_value.slice(0,-1);
    var el = document.getElementById("demo");
    el.innerHTML=calc_value;
}
//baskspace기능
