const input = document.querySelector('input');
const ul = document.createElement('ul');


const addTask = (inputValue) => {
    const titleTask =  input.value;
    const li = document.createElement('li');
    if (titleTask === '') return ;
    ul.appendChild(li);
    document.body.appendChild(ul);
    li.textContent =  titleTask;
    input.value = "";
}

input.addEventListener('input', addTask)

