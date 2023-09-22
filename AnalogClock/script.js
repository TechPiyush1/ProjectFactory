
setInterval(() => {
    d=new Date();
    hourHand=d.getHours();
    minuteHand=d.getMinutes();
    secondHand=d.getSeconds();


    hrotation=(30*hourHand)+(minuteHand/2);
    mrotation=6*minuteHand;
    srotation=6*secondHand;
    

    document.querySelector(".hourHand").style.transform=`rotate(${hrotation}deg)`;
    document.querySelector(".minHand").style.transform=`rotate(${mrotation}deg)`;
    document.querySelector(".secHand").style.transform=`rotate(${srotation}deg)`;
}, 1000);