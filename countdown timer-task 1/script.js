const Independance="08/15/2024";

const day1=document.querySelector('.day');
const hour1=document.querySelector('.hour');
const minute1=document.querySelector('.minute');
const second1=document.querySelector('.seconds');

function timeCountDown(){
    const nowDate=new Date();
    const IndependanceDate=new Date(Independance);
    const totalSeconds=(IndependanceDate-nowDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;

    day1.textContent=formatTime(days);
    hour1.textContent=formatTime(hours);
    minute1.textContent=formatTime(minutes);
    second1.textContent=formatTime(seconds);  
}

function formatTime(time){
    return time > 10 ? time :`0${time}`;
}
timeCountDown()
setInterval(timeCountDown,1000);

