const boxes=document.querySelectorAll(".box");

let isUser1Turn=true;

boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        const clickedBox=e.target;

        if(!clickedBox.classList.contains("done")){
        clickedBox.innerHTML= isUser1Turn?"X":"O";
        clickedBox.classList.add("done");
        isUser1Turn=!isUser1Turn;
        checkWinningUser();
        }
});
});



function  checkWinningUser(){


    const all=document.querySelectorAll(".box");
    const winingCombos=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [3,4,6],[0,4,8]
]
console.log(all[3]);
winingCombos.forEach(array=>{
    const circleWins=array.every(cell=>
        all[cell].firstchild?.classList.contains('done'))
        if(circleWins){
            console.log("Circle Wins");
        }
})


}

startGame();
// box.forEach((box)=>{
//     box.addEventListener("click", (e)=>{
//         const clickedBox=e.target;
//         if(clickedBox.classList.contains("done")){
        
//         }

//     });
// });


