const boxes=document.querySelectorAll(".box");

let isUser1Turn=true;

boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        const clickedBox=e.target;

        if(!clickedBox.classList.contains("done")){
        clickedBox.innerHTML= isUser1Turn?"X":"O";
        clickedBox.classList.add("done");
        isUser1Turn=!isUser1Turn;
        }
});
});



