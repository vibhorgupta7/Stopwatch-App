var hh=0;
var mm=0;
var ss=0;
var flag=1;
var lapCount=1;
var clock = setInterval(function(){
    if(flag==0)
    {
        if(mm==60){
            hh++;
            mm=0;
        }

        if(ss==60){
            mm++;
            ss=0;
        }
        else{
            ss++;
        }
        var fh=0,fm=0,fs=0;
        if(hh<10){
            hh="0"+hh;
            fh=1;
        }
        if(mm<10){
            mm="0"+mm;
            fm=1;
        }
        if(ss<10){
            ss="0"+ss;
            fs=1;
        }
        
        var curTime = document.getElementById("curTime");
        curTime.innerHTML=hh+":"+mm+":"+ss;

        if(fh==1)
        {
            hh=hh-"0";
        }
        if(fm==1)
        {
            mm=mm-"0";
        }
        if(fs==1)
        {
            ss=ss-"0";
        }
    }
},1000);

function lap(){
    if(hh!=0 ||mm!=0 || ss!=0){
    var d=document.createElement("div");
    var lc=document.createElement("li");
    var lt=document.createElement("li");

    lc.innerHTML="Lap "+lapCount;
    lapCount++;
    lt.innerHTML=document.getElementById("curTime").innerHTML;
    d.setAttribute("class","lapTime");
    lc.setAttribute("class","lapc");
    lt.setAttribute("class","lapt");
    d.appendChild(lc);
    d.appendChild(lt);
    document.getElementsByClassName("time")[0].appendChild(d);
    }
}

function start(){
    flag=0;
    var button2=document.getElementById("button-2");
    button2.innerHTML="Stop";
    button2.setAttribute("onclick","Stop()");
    button1=document.getElementById("button-1");
    button1.innerHTML="Lap";
    button1.setAttribute("onclick","lap()");

}

function Stop(){
    flag=1;
    var button2=document.getElementById("button-2");
    button2.innerHTML="Start";
    button2.setAttribute("onclick","start()");
    var button1=document.getElementById("button-1");
    button1.innerHTML="Reset";
    button1.setAttribute("onclick","reset()");
}

function reset(){
    hh=0;
    mm=0;
    ss=0;
    flag=1;
    lapCount=1;
    document.getElementById("curTime").innerHTML="00:00:00";
    var button1=document.getElementById("button-1");
    button1.innerHTML="Lap";
    button1.setAttribute("onclick",lap());
    document.getElementsByClassName("time")[0].innerHTML="";
}