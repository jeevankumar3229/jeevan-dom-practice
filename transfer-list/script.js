let left=document.querySelector('.left1');
let right=document.querySelector('.right1');
let dleft=document.querySelector('.double-left');
let dright=document.querySelector('.double-right');
let leftside =document.querySelector('.left');
let rightside=document.querySelector('.right');
dright.addEventListener("click",function(){
    let set=document.querySelectorAll('.check-set1');
    set.forEach((item)=>{
        item.classList.remove('check-set1');
        item.classList.add('check-set2');
        rightside.appendChild(item)
    })
})

dleft.addEventListener("click",function(){
    let set=document.querySelectorAll('.check-set2');
    set.forEach((item)=>{
        item.classList.remove('check-set2');
        item.classList.add('check-set1');
        leftside.appendChild(item)
    })
})

left.addEventListener("click",function(){
    let set=document.querySelectorAll('.right input[type="checkbox"]:checked');
    if(set.length>0){
        left.disabled=false;
    }
    set.forEach((item)=>{
        item.parentElement.classList.remove('check-set2');
        item.parentElement.classList.add('check-set1');
        item.checked=false;
        leftside.appendChild(item.parentElement)
    })
})

right.addEventListener("click",function(){
    let set=document.querySelectorAll('.left input[type="checkbox"]:checked');
    set.forEach((item)=>{
        item.parentElement.classList.remove('check-set1');
        item.parentElement.classList.add('check-set2');
        item.checked=false;
        rightside.appendChild(item.parentElement)
    })
})