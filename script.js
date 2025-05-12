const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const addTaskBtn = document.getElementById('addTask');
    const newTaskInput = document.getElementById('newTaskInput');
    const todoList = document.getElementById('todoList');
    const historyList = document.getElementById('historyList');

    function toggleModal(show) {
      modal.style.display = show ? 'block' : 'none';
      overlay.style.display = show ? 'block' : 'none';
    }

    openModalBtn.addEventListener('click', () => toggleModal(true));
    overlay.addEventListener('click', () => toggleModal(false));

    addTaskBtn.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText === '') return;

      const taskEl = document.createElement('div');
      taskEl.className = 'task';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const label = document.createElement('label');
      label.textContent = taskText;

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          historyList.appendChild(taskEl);
        } else {
          todoList.appendChild(taskEl);
        }
      });

      taskEl.appendChild(checkbox);
      taskEl.appendChild(label);
      todoList.appendChild(taskEl);

      newTaskInput.value = '';
      toggleModal(false);
    });
    const clearHistoryBtn = document.getElementById('clearHistory');
    // Clear history functionality
    document.getElementById('clearHistory').addEventListener('click', function () {
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = ''; // Clear all history items
    });