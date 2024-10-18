let tasklist = document.querySelector('.task-container');
let input = document.querySelector('.input');
let para = document.createElement('p');
para.innerText = "Ooops! List is Empty";
para.style.fontWeight = "bold";
para.style.fontSize = "30px";
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && `${input.value}` !== "") {
        para.style.display = "none";
        let div = document.createElement('div');
        let text = document.createElement('input');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        div.classList.add('each-task');
        editBtn.innerHTML = `<i class="fa-solid fa-pencil edit"></i>`;
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt delete"></i>';
        text.setAttribute('readonly', true);
        const inputsize = input.value.length;
        text.setAttribute('size', inputsize)
        text.setAttribute('value', input.value);
        text.classList.add('text');
        editBtn.classList.add('btn')
        deleteBtn.classList.add('btn');
        div.appendChild(text)
        div.appendChild(editBtn)
        div.appendChild(deleteBtn)
        tasklist.appendChild(div);

        input.value="";
    }
    


})

if (tasklist.querySelectorAll('.each-task').length === 0) {
    tasklist.appendChild(para);
}

tasklist.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit")) {
        let div = e.target.closest(".each-task");
        let text = div.querySelector('.text')
        if (text.getAttribute('readonly')) {
            e.target.classList.remove('fa-pencil');
            e.target.classList.add('fa-save');
            text.removeAttribute('readonly');
        }
        else {
            e.target.classList.add('fa-pencil');
            e.target.classList.remove('fa-save');
            text.setAttribute('readonly', true);
            text.setAttribute('size', text.value.length);
        }
    }

    if (e.target.classList.contains("delete")) {
        let div = e.target.closest(".each-task");
        div.remove();
        if (tasklist.querySelectorAll('.each-task').length === 0) {
            tasklist.appendChild(para);
            para.style.display = "block";
        }
    }
})







