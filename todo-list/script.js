let tasklist = document.querySelector('.task-container');
let input = document.querySelector('.input');
let para = document.createElement('p');
para.innerText = "Ooops! List is Empty";
para.style.fontWeight = "bold";
para.style.fontSize = "30px";
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && `${input.value}` !== "") {
        para.style.display="none";
        let div = document.createElement('div');
        let text = document.createElement('input');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        div.classList.add('each-task');
        editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
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
        editBtn.addEventListener("click", function () {
            if (text.getAttribute('readonly')) {
                editBtn.innerHTML = `<i class="fa-solid fa-save"></i>`;
                text.removeAttribute('readonly');
            }
            else {
                editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
                text.setAttribute('readonly', true);
                text.setAttribute('size', text.value.length);
            }

        })

        deleteBtn.addEventListener("click", function (f) {
            div.remove();
            if (tasklist.querySelectorAll('.each-task').length === 0) {
                tasklist.appendChild(para);
                para.style.display="block";
            }


        })

    }


})

if (tasklist.querySelectorAll('.each-task').length === 0) {
    tasklist.appendChild(para);
}







