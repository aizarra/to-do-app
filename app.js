window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); //stops from refreshing the page. When you submit a form in html, it usually refresh the page to try to submit it. This prevents it from doing that

    // The task is an inputed value
    const task = input.value;

    // The capability to add each task is created by adding a div and naming that div with a class. This allows the user to add a task in the input bar. It should look something like this: <div class="task">
    // <div class="content">Do homework</div>
    //</div>
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    // It then adds the inputed value to the task list
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    //the actions are created with their respective buttons
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Editar';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Borrar';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = '';

    //the event listeners are added for the buttons functionalities
    task_edit_el.addEventListener('click', (e) => {
      if (task_edit_el.innerText.toLowerCase() == 'editar') {
        task_edit_el.innerText = 'Guardar';
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
      } else {
        task_edit_el.innerText = 'Editar';
        task_input_el.setAttribute('readonly', 'readonly');
      }
    });

    task_delete_el.addEventListener('click', (e) => {
      list_el.removeChild(task_el);
    });
  });
});
