let gameOver = new Audio('gameover.mp3');
let boxes = document.querySelectorAll(".box");
let arr = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let isWon = false;
var num1,num2,num3;

// function for line creation 
function lineCreation(L,T,W,Rotate){
    let elem = document.querySelector(".line").style;
    elem.top = `${T}px`;
    elem.left = `${L}px`;
    elem.width = `${W}vw`;
    elem.transform = `rotate(${Rotate}deg)`
}
//
function condition(num1, num2, num3){
    if((boxes[num1].textContent === boxes[num2].textContent)&&(boxes[num2].textContent === boxes[num3].textContent)&&(boxes[num1].textContent.length != 0)){
        document.getElementsByTagName("h4")[0].innerText = boxes[num1].textContent +" Won ";
        let x = window.matchMedia("(max-width : 1400px)");
        isWon = true;
        setTimeout(()=>{
            gameOver.play();
        },1000)

        if(x.matches){ // for max-width
            document.getElementsByTagName("img")[0].style.width = "150px";
            switch([num1,num2,num3].toString()){
                case ([0,1,2].toString()) : {
                    lineCreation(6,25,42,0);
                    break;
                };
                case ([3,4,5].toString()) : {
                    lineCreation(6,82,42,0);
                    break;
                };
                case ([6,7,8].toString()) : {
                    lineCreation(6,138,42,0);
                    break;
                };
                case ([0,3,6].toString()) : {
                    lineCreation(-50,82,42,90);
                    break;
                };
                case ([1,4,7].toString()) : {
                    console.log("147 is called.");
                    lineCreation(7,82,42,90);
                    break;
                };
                case ([2,5,8].toString()) : {
                    console.log("2,5,8 is called");
                    lineCreation(63,82,42,90);
                    break;
                };
                case ([0,4,8].toString()) : {
                    lineCreation(12,85,53,45);
                    break;
                };
                case ([2,4,6].toString()) : {
                    lineCreation(-18,86,53,135);
                    break;
                };
            };
        }
        else{
            document.getElementsByTagName("img")[0].style.width = "350px";
            switch([num1,num2,num3].toString()){
                case ([0,1,2].toString()) : {
                    lineCreation(0,57,24,0);
                    break;
                };
                case ([3,4,5].toString()) : {
                    lineCreation(0,185,24,0);
                    break;
                };
                case ([6,7,8].toString()) : {
                    lineCreation(0,305,24,0);
                    break;
                };
                case ([0,3,6].toString()) : {
                    lineCreation(-122,185,24,90);
                    break;
                };
                case ([1,4,7].toString()) : {
                    console.log("147 is called.");
                    lineCreation(0,185,24,90);
                    break;
                };
                case ([2,5,8].toString()) : {
                    console.log("2,5,8 is called");
                    lineCreation(125,185,24,90);
                    break;
                };
                case ([0,4,8].toString()) : {
                    lineCreation(-45,181,30,45);
                    break;
                };
                case ([2,4,6].toString()) : {
                    lineCreation(-45,181,30,135);
                    break;
                };
            };
        }
    };
};

function wonCondition(){
    arr.forEach((x) =>{
        condition(x[0], x[1], x[2]);
    })
}

// Line showing on wining 

// arr.forEach((elem)=>{
//     condition(elem[0],elem[1],elem[2]);
// })
let value = "X";
// Draw condition 
let isDraw = () =>{
    return(Array.from(boxes).every((box) => (box.textContent.length !== 0)));
}
//
boxes.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        if(elem.textContent.length === 0){
            let ting = new Audio('ting.mp3');
            ting.play();
            elem.textContent = value;
            wonCondition();
            if(isDraw() && !isWon){
                document.getElementsByTagName("h4")[0].textContent = "match draw";
            }
            if(isWon === false){
                if(value === "O"){value = "X"}else{value = "O"}
                document.getElementById("span").textContent = value;
            }
            else{
                document.querySelector(".container").classList.add("disable");
            }
        }
    })
})
document.getElementById("reset").addEventListener("click",()=>{
    if(confirm("Do you want to reset the game?")){
        boxes.forEach((y)=>{
            if(y.textContent.length === 1){
                y.textContent = "";
            }
        });
        document.querySelector(".container").classList.remove("disable");
        document.getElementsByTagName("img")[0].style.width = "0px";
        value = "X";
        document.getElementsByTagName("h4")[0].innerHTML = `Turn&nbsp;&nbsp;<span id='span'>${value}</span>`
        document.querySelector(".line").style.width = "0px";
        isWon = false;
    }
})