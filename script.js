let button=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let turn0=true;


const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

button.forEach((boxi)=>{
    boxi.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            boxi.innerText="0";
            turn0=false;
        }
        else{
            boxi.innerText="X";
            turn0=true;
        }
        boxi.disabled=true;
        checkwinner();
    })
});

let win=document.querySelector(".winner");


let flag=0;

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=button[pattern[0]].innerText;
        let pos2=button[pattern[1]].innerText;
        let pos3=button[pattern[2]].innerText;
        if (pos1 !== "" && pos1 === pos2 && pos1 === pos3) {
            flag++;
            if(flag!=0){
            win.innerText=`${pos1} is the winner`;
            }
            else if (flag==0){
                win.innerText="Game is Draw";
            }
            document.querySelector(".game-board").classList.add("hidden");
            return;
        }
    }
};



reset.addEventListener("click",()=>{
    document.querySelector(".game-board").classList.remove("hidden");
    win.innerText="";
    button.forEach((boxi)=>{
        boxi.innerText="";
    })
    turn0=true;
});