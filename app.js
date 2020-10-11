const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.createElement('ul');
const li = document.createElement('li');

addTask = (e) => {
    e.preventDefault();
    const titleTask =  input.value;
    ul.appendChild(li);
    document.body.appendChild(ul);
    li.textContent =  titleTask;
    input.value = "";

}

form.addEventListener('submit', addTask)

