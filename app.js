let gameSeq=[];
let userSeq=[];
let btns=["yellow","red", "purple","green"];
let h2= document.querySelector("h2");
let h3= document.querySelector("h3");
let started = false;
let level = 0;
let highScore = 0;
let btn = document.querySelector("button");


// document.addEventListener("keypress", function(){
//      if(started == false){
//         started=true;
//         levelup();
//      }

// });

btn.addEventListener("click", function(){
    if(started == false){
       started=true;
       levelup();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn =  document.querySelector(`.${randColor}`);
    
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}


function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>
        <button > Restart </button>`;
        let btn = document.querySelector("button");
        
btn.addEventListener("click", function(){
    if(started == false){
       started=true;
       levelup();
    }

});
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        
        if(highScore<=level){
            highScore = level;
             h3.innerHTML = `Your Highest Score is : <b> ${highScore}</b>`;
         }
         else{
             h3.innerHTML = `Your Highest Score is : <b> ${highScore}</b>`; 
         }

        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn =this;
    btnFlash(btn);


    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq= [];
    userSeq= [];
    level= 0;
}