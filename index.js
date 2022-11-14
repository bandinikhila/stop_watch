var a=0,b=0,c=0,secc=0;
var timer=document.getElementById("timer")
var t =false;

document.getElementById("st").addEventListener("click",start);

document.getElementById("re").addEventListener("click",reset);

document.getElementById("con").addEventListener("click",recon);

document.getElementById("abt").addEventListener("click",recona);

document
function start(){

    
    timeout()

}

function running(){

    document.getElementById("pa").addEventListener("click",pause);
    secc++;
    c=secc%60
    b=(Math.floor(secc/60)%60)
    a=Math.floor(secc/3600)
    if(c<10){
        c="0"+c
    }
    if(b<10){
        b="0"+b
    }
    if(a<10){
        a="0"+a
    }
   // console.log(a+":"+b+":"+c)
   timer.innerText = a+":"+b+":"+c ;
}
function timeout(){
    if(!t ){
        t= setInterval(running,1000);
    }
    
}
function pause(){
  
    clearInterval(t)
    t=false;
    document.getElementById("st").innerText="Resume"
}
function reset(){
    secc=0
    clearInterval(t)
    t=false;
    timer.innerText = "00"+":"+"00"+":"+"00" ;
    document.getElementById("st").innerText="Start"
}
function recon(){
    window.location="contact.html"
}

function recona(){
    window.location="about.html"
}

///
