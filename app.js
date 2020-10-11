const form = document.querySelector('form');
const input = document.querySelector('input');


addTask = (e) => {
    e.preventDefault();
    const titleTask =  input.value;
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    ul.appendChild(li);
    document.body.appendChild(ul);
    li.textContent =  titleTask;
    input.value = "";

}

form.addEventListener('submit', addTask)

