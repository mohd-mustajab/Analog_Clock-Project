setInterval(() => {
    d=new Date();
    hour=d.getHours();
    minute=d.getMinutes();
    second=d.getSeconds();
    hrotation=30*hour + minute/2;
    mrotation=6*minute +second/10;
    srotation=6*second;

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    minute_hand.style.transform = `rotate(${mrotation}deg)`;
    second_hand.style.transform = `rotate(${srotation}deg)`;

    time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    document.getElementById('time').innerHTML = time;
}, 1000);
