let boxes=document.querySelectorAll(".box");
let restbttn=document.querySelector("#reset-btn");
let turnO=true;//player x,player 0
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".mssg-container");
let msg=document.querySelector("#msg");


const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
       
        if(turnO){
            box.innerText="0";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(Winner)=>{
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=() =>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
restbttn.addEventListener("click",resetGame);





