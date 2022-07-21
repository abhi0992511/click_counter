var sanu=document.getElementById('one');
sanu.style.color="cyan";
sanu.style.backgroundColor="red";

sanu.addEventListener('click',function(){
    sanu.innerText="you clicked here right !";
    sanu.style.backgroundColor="blue";

});
var button=document.getElementById("b");

var count=0;
var print=document.getElementById("print");
button.addEventListener('click',function(){
    button.innerHTML="you clicked";
    count++;
    print.innerHTML=count;

    // window.alert('he clicked');


});