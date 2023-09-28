const area=document.querySelector("p");
const generateRandom=document.querySelector("button");
document.body.classList.add("style");

function generateQuote(randomQuotes,randomImage){

fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
.then(response=>response.json())
.then(data=>{
    const q=data;
    area.innerHTML=q.quotes[randomQuotes].quote;
    document.querySelector("#authorName").innerHTML="~ "+q.quotes[randomQuotes].author;
    document.body.style.backgroundImage=`url('images/${randomImage}.jpg')`;
}).catch(err=>{
    console.log("Error fetching json data",err);
});

}


generateRandom.addEventListener("click",()=>{
const randomQuoteNo=Math.floor(Math.random()*100);
const randomImageNo=Math.floor(Math.random()*5+1);
generateQuote(randomQuoteNo,randomImageNo);
});