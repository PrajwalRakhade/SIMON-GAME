let gameseq = [];
let userseq = [];
let rancolor = ["div11","div12","div21","div22"];
let level = 0;
let start = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!start) {  
        console.log("Game Started");
        start = true;
        levelup();
    }
});

function btnflash(btn) {
    if (btn) { // Ensure btn is not null
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");
        }, 250);
    } else {
        console.log("Button element not found!");
    }
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level }`;
    let rendom = Math.floor(Math.random() * 4); 
    let randcol = rancolor[rendom];
   let whichcolor=document.querySelector(`.${randcol}`);
    console.log(rendom);
    console.log(randcol);
    console.log(whichcolor);
    gameseq.push(randcol);

    btnflash(whichcolor);
}
function checkcolor(idx){
   
    console.log(idx);
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
       setTimeout( levelup,1000);
       }
    }else{
        h2.innerHTML=`game over your score is  <b> ${level}</b> to start the game press any key `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();
    }
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor)
    checkcolor(userseq.length-1);
    console.log("cheksum run");

}
let allbtn = document.querySelectorAll(".btr");

for (btr of allbtn) {  
    btr.addEventListener("click", btnpress);
}
function reset(){
    start=false;
    userseq=[];
    gameseq=[];
    level=0;
}