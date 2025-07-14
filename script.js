let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".newGame")
let msg=document.querySelector(".message")
let msgContainer=document.querySelector(".message-container")
let msg1=document.querySelector(".message1");
let msg2=document.querySelector(".message3");
let turno=true;

let winnerPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    

];
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
{
  if(turno===true){
    box.innerText="O";
  turno=false;
  }
  else{
    box.innerText="x";
    turno=true;
  }
  box.disabled=true;
  count++;
  checkWinner()
  drawWinner(count);
  


});


});
const drawWinner=(count)=>{
    if(count==9){
      if(checkWinner1!=true){
  msg1.innerText="the match has drawn";
msg1.classList.remove("hide1");
disableBoxes();
console.log("draw");
msg2.classList.remove("hide2");
      }
      

    }
}
const disableBoxes=()=>{

for(let box of boxes){
 box.disabled=true;
}
}
const enableBoxes=()=>{

for(let box of boxes){
 box.disabled=false;
 box.innerText="";
}
}
    
const showWinner=(winner)=>{
  msg.innerText=`congratulations winner is ${winner}`;
  msgContainer.classList.remove("hide");
  msg2.classList.remove("hide2");
  disableBoxes();

}
let checkWinner1=false;

const checkWinner=()=>{
    for(pattern of winnerPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
         let pos3val=boxes[pattern[2]].innerText;
         let count=0;
       
 
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
            console.log("winner");
           showWinner(pos1val);
           checkWinner1=true;
    pattern.forEach(i => boxes[i].classList.add("bold"));

      



           
           
        }
    
        
        

    }
    
    }
    
}
const resetGame=()=>
{

    turno=true;
    enableBoxes();
msgContainer.classList.add("hide")
msg1.classList.add("hide1");
msg2.classList.add("hide2");
boxes.forEach(box=>box.classList.remove("bold"));

count=0;
checkWinner1=false;
}
console.log(reset);
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
