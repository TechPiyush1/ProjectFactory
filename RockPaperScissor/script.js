const option=document.querySelector(".chance"),
user=document.querySelector("#img1"),
result=document.querySelector("h2"),
cpu=document.querySelector("#img2");

const values=["img/rock.png","img/paper.png","img/scissors.png"];

function start(){

    result.textContent="Play Game"
option.addEventListener("click",(e)=>{
    let userSelectedImage=e.target.src;
    user.src=userSelectedImage;
    result.textContent="Wait...";

    const cpuResponse=Math.floor(Math.random()*3);
    cpu.src=values[cpuResponse];

    let cpuValue=['R','P','S'][cpuResponse];
    let userValue=['R','P','S'][e.target.alt];

    let outcomes={
        RR:"Draw",
        RP:"Cpu",
        RS:"User",
        PP:"Draw",
        PR:"User",
        PS:"Cpu",
        SS:"Draw",
        SR:"CPU",
        SP:"User",
    }

    let outcomeValue= outcomes[userValue+cpuValue];
    result.textContent=userValue===cpuValue?"Match Draw":`${outcomeValue} Won!!`
});
}

start();