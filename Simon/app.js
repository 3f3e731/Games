let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started!");
        started=true;
        levelUp();
    }
});
let h3=document.querySelector("h3");
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function checkAns(idx){

    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerText=`Game Over! Press any key to restart`;
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}