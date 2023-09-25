const option=document.querySelector(".chance"),
user=document.querySelector("#img1"),
result=document.querySelector("h2"),
cpu=document.querySelector("#img2");

const values=["img/rock.png","img/paper.png","img/scissors.png"];

function start(){

option.addEventListener("click",(e)=>{
    console.log(user.src);
    user.src=e.target.src;
    result.textContent="Wait....";
});
}

start();