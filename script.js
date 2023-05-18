setInterval(timer, 1000);

function timer(){
    const timer=new Date();
    document.querySelector(".clock").innerHTML=timer.toLocaleTimeString('en-US', { hour: 'numeric',minute: 'numeric',second: 'numeric', hour12: true });
}

