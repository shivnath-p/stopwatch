const watch=document.getElementById("stopwatch");
var hour=0;
var min=0;
var sec=0;
var stoptime=true;

function startTimer(){
if(stoptime==true){
    stoptime=false;
    timercycle();
}
}
function stopTimer(){
    if(stoptime==false){
        stoptime=true;
    }
}
function timercycle(){
    if(stoptime == false){
        sec=parseInt(sec);
        min=parseInt(min);
        hour=parseInt(hour);

        sec = sec+1;

        if(sec==60){
            min=min+1;
            sec=0;      
       }
    
if(min==60){
    hour=hour+1;
    min=0;
    sec=0;
}
if(sec<10){
    sec='0'+sec;
}
if(min<10){
    min='0'+min;
}
if(hour<10){
    hour='0'+hour;
}

watch.innerHTML =hour +";"+min +":"+sec;
setTimeout("timercycle()",1000);
}
}
function resetTimer(){
    watch.innerHTML="00:00:00";
    stoptime=true;
    hour=0;
    sec=0;
    min=0;
}