const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, primero ingresa una tarea.');
        return;
    }
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.classList.add('completed');
            taskList.appendChild(li);
        } else {
            li.classList.remove('completed');
        }
    });
    const span = document.createElement('span');
    span.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '✖';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener ('keypress',(e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});