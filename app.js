// const addTask = (e) => {
//
//     if (e.keyCode === 13) {
//         const titleTask = e.target.value;
//         const li = document.createElement('li');
//         if (titleTask === '') return;
//         li.textContent = titleTask;
//         ul.appendChild(li);
//     }
// }

class App {
    constructor() {
        this.events();
    }

    events() {
        this.handlers.input.addEventListener('keydown', this.addTask)
        this.handlers.list.forEach(list => list.addEventListener('click', this.removeTask))
    }

    addTask = (e) => {
        if (e.code !== "Enter") return;
        const value = this.handlers.input.value;
        const task = new Task(value);
        if (task.isTaskValid()) {
            this.handlers.list.forEach(li => li.appendChild(task.getElement()));
        }
    }

    removeTask = (e) => {
        e.target.parentNode.removeChild(e.target)
    }

    get handlers() {
        return {
            input: document.querySelector('input'),
            list: document.querySelectorAll('#listOfTask')
        };
    }

}

class Task {
    constructor(name) {
        this.name = name;
    }

    isTaskValid() {
        return !!this.name.replace(/\s/g, '').length;
    }

    getElement() {
        const li = document.createElement('li');
        li.textContent = this.name;
        return li;
    }
}

new App();



