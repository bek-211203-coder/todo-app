document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    const taskCount = document.getElementById('taskCount');
    const clearButton = document.getElementById('clearButton');

    function updateTaskCount() {
        const items = todoList.getElementsByTagName('li');
        taskCount.textContent = `${items.length} tasks`;
    }

    function createDeleteButton() {
        const button = document.createElement('button');
        button.textContent = '';
        button.className = 'delete-btn';
        button.addEventListener('click', (event) => {
            event.stopPropagation(); 
            todoList.removeChild(li);
            updateTaskCount();
        });
        return button;
    }

    addButton.addEventListener('click', () => {
        const task = input.value.trim();
        if (task !== '') {
            const li = document.createElement('li');
            li.textContent = task;

            const deleteButton = createDeleteButton();
            li.appendChild(deleteButton);

            todoList.appendChild(li);
            input.value = '';
            updateTaskCount();
        }
    });

    clearButton.addEventListener('click', () => {
        todoList.innerHTML = '';
        updateTaskCount();
    });
});
