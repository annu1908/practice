const input = document.querySelector('input');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

btn.addEventListener('click', () => {
  const taskValue = input.value.trim();
  if (taskValue === "") return;

  const task = document.createElement('li');

  task.innerHTML = `
    <span class="task-text">${taskValue}</span>
    <div class="buttons">
      <button class="tick-btn">✅</button>
      <button class="delete-btn">❌</button>
    </div>
  `;

  list.prepend(task);
  input.value = "";
});

list.addEventListener('click', function(event) {
 if(event.target.tagName=='BUTTON'){
    if(event.target.className==='delete-btn'){
        event.target.parentElement.parentElement.remove();
    }
    if(event.target.className==='tick-btn'){
        event.target.parentElement.previousElementSibling.style.color='green';
    }
 }
});