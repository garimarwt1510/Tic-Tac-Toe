let boxes = document.querySelectorAll(".btn");
let chooseX=true;

boxes.forEach((box)=>{
    box.addEventListener('click' ,()=>{
        if(chooseX==true){
        box.innerHTML='<img src="Images/X.png" style="width:30px; height:30px  boxShadow: 0 4px 6px -1px gray;">';
    chooseX=false;
        }
        else{
            box.innerHTML='<img src="Images/O.png" style="width:30px; height:30px">';
            chooseX=true;
        }
        box.disabled=true;
    })
})
