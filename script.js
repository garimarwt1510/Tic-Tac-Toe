let boxes = document.querySelectorAll(".btn");
let chooseX=true;
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let win_msg=document.querySelector("#win_msg");
let msg=document.querySelector(".msg");
let startbtn=document.querySelector("#start-btn");
let start=document.querySelector("#start");
let reset=document.querySelector("#reset");

let X= '<img id="X"; src="Images/X.png" style="width:30px; height:30px;">';
startbtn.addEventListener('click',()=>{
    start.innerHTML='<h5 style= "font-size: 40px ; color: #f95e34 ;" >Loading.......</h5>'
    setTimeout(()=>{
start.style.transiton="opacity 2s ease;";
start.style.display="none";

 },1000);
}
);


boxes.forEach((box)=>{
    box.addEventListener('click' ,()=>{
        if(chooseX==true){
         box.innerText="X";
        box.innerHTML='<img id="X"; src="Images/X.png" style="width:30px; height:30px;">';
        box.style.boxShadow="1px 2px 10px rgb(224, 71, 28)";
    chooseX=false;
        }
        else{
            box.innerText="O";
             box.innerHTML='<img id="O"; src="Images/O.png" style="width:30px; height:30px; ">';
            
            box.style.boxShadow="1px 2px 10px rgb(224, 71, 28)";
            chooseX=true;
        }
        box.disabled=true;
        winner();
    });
});

let diabled=()=>{
for(let box of boxes){
    box.disabled=true;
}
}


function winner() {
for(let pattern of win){
    
   let pos1=boxes[pattern[0]].innerHTML;
   let pos2=boxes[pattern[1]].innerHTML;
   let pos3=boxes[pattern[2]].innerHTML;

   if(pos1 !="" && pos2 !=""&& pos3 !=""){
    if(pos1==pos2 && pos2==pos3){
        msg.classList.remove("hide");
        win_msg.innerText="Winner";
        diabled();
    
    }

}
}
reset.addEventListener('click',()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
        msg.classList.add("hide");
    
    }
});
