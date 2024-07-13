let level=0;
let start= false;

let buttons=["red","green","purple","yellow"];

let userSequence=[];
let gameSequence=[];

document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
    }
    levelUp();
});

let h3=document.querySelector("h3");

function levelUp(){
    level++;
    h3.innerHTML=`Level ${level}`;

    let index= Math.floor(Math.random()*3)+1;
    let randomColor=buttons[index];
    let randomButton=document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    console.log(`game flashed ${randomColor}`);
    console.log(`game sequence : ${gameSequence}`);
    flashButton(randomButton);
}

function flashButton(btn){
    btn.classList.add("flashbtn");
    setTimeout(function(){
        btn.classList.remove("flashbtn");},250);

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");},250);

}

function pressed(){
    let userPressed=this;
    userFlash(userPressed);

    let userBtn=userPressed.getAttribute("id");
    userSequence.push(userBtn);

    console.log(`user pressed ${userBtn}`);
    console.log(`user sequence : ${userSequence}`);
}

let allButtons=document.querySelectorAll(".btn");
for(button of allButtons){
    button.addEventListener("click",pressed);
}