document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('#novaTarefa');
    const taskButton = document.querySelector('#btnCriar');
    const taskContainer = document.querySelector('.cadastro');
    const taskCount = document.querySelector('#taskCount');
    const completedCount = document.querySelector('#completedCount');

    let tasks = [];

    taskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const task = {
                text: taskText,
                completed: false
            };
            tasks.push(task);
            taskInput.value = '';
            renderTasks();
        }
    });

    function renderTasks() {
        const taskList = document.createElement('div');
        taskList.className = 'task-list';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index=${index}>
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button data-index=${index}>
                    <img src="./imagens/lixeira.png" alt="" class="img-lixeira">
                </button>
            `;
            taskList.appendChild(taskItem);
        });

        taskContainer.innerHTML = `
            <img class="clipboard" src="imagens/Clipboard.png" alt="Clipboard">
            <div>
                <p class="sem-tarefas">Você ainda não tem tarefas cadastradas</p>
                <p class="crie-tarefas">Crie tarefas e organize seus itens a fazer</p>
            </div>
        `;
        if (tasks.length > 0) {
            taskContainer.innerHTML = '';
            taskContainer.appendChild(taskList);
        }

        taskCount.textContent = tasks.length;
        const completedTasksCount = tasks.filter(task => task.completed).length;
        completedCount.textContent = `${completedTasksCount} de ${tasks.length}`;
    }

    taskContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.parentElement.tagName === 'BUTTON') {
            const index = e.target.dataset.index || e.target.parentElement.dataset.index;
            tasks.splice(index, 1);
            renderTasks();
        } else if (e.target.type === 'checkbox') {
            const index = e.target.dataset.index;
            tasks[index].completed = e.target.checked;
            renderTasks();
        }
    });

    renderTasks();
});