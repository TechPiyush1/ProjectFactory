const boxes=document.querySelectorAll(".colorBox");
const trigger=document.querySelector("button")

const random=['0','1','2','3','4','5','6','7','8','9',
'a','b','c','d','e','f'];

function randomColor(){
    const hex=Math.floor(Math.random()*16);
    return hex;
}

boxes.forEach((colorBox)=>{

trigger.addEventListener("click",()=>{
    let i=0,hexCode="#";
    while(i<6)
    {
    const code=randomColor();
    hexCode=hexCode+random[code];
    i++;
    }
    colorBox.style.backgroundColor=`${hexCode}`;
    const text= colorBox.childNodes;
    text.innerHTML=hexCode;
    text.classList.add("hover");
    
});
});
