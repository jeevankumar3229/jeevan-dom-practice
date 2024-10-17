let text=document.querySelector('.first-p');
let inc=document.querySelector('.one');
let dec=document.querySelector('.two');
let input=document.querySelector('.input');
let reset=document.querySelector('.three');

inc.addEventListener("click",function(){
    if(`${input.value}`!== ""){
    text.innerText= Number(text.innerText) + Number(`${input.value}`);
    }
    else{
        alert("Enter the value in text box")
    }
})

dec.addEventListener("click",function(){
    if(`${input.value}`!== ""){
        text.innerText= Number(text.innerText) - Number(`${input.value}`);
        }
        else{
            alert("Enter the value in text box")
        }
   
})

reset.addEventListener("click", function(){
    text.innerText= 0;
})
