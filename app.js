

var min=0;
var hrs=0;
var sec=0;
var msec=0;
var min1=document.getElementById("min");
var hrs1=document.getElementById("hrs");
var sec1=document.getElementById("sec");
var mlsec=document.getElementById("msec");
function timer(){
msec++;
mlsec.innerHTML=msec;
if (msec>=100){
    sec++;
    sec1.innerHTML=sec;
    msec=0;
}
else if(sec>=60){
    min++;
    min1.innerHTML=min;
    sec=0;
}
else if(min>=60){
    hrs++;
    hrs1.innerHTML=hrs;
    hrs=0;
}
}
var intrvl;
function start(){
    intrvl=setInterval(timer,10);
    document.getElementById("start").disabled = true;
    document.getElementById("play").disabled = true;
}
function pause(){
        clearInterval(intrvl);
        document.getElementById("play").disabled=false;
        
}


function reset(){
min=0;
hrs=0;
sec=0;
msec=0;
var a=sec1.innerHTML
sec1.innerHTML=sec;

var b=hrs1.innerHTML
hrs1.innerHTML=hrs;

var c=min1.innerHTML
min1.innerHTML=min;

var d=mlsec.innerHTML

mlsec.innerHTML=msec;
pause()
document.getElementById("start").disabled = false;
var i=0;
alert("lap completed after " + b + " hours " + c + " minutes " + a + " seconds " + d + " miliseconds");
}
