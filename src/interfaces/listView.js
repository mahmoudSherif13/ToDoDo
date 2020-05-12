import { createTask } from '../handlers/handle';
function newTaskBtn(id) {
    console.log(id);
    let title = prompt('task title');
    createTask(title, id);
}
export function getListView(list) {
    // list
    const listView = document.createElement('div');
    listView.classList.add('list');
    listView.id = list.getId();

    // title
    const titleView = document.createElement('div');
    titleView.classList.add('list-name');
    titleView.innerText = list.getTitle();
    listView.append(titleView);

    // tasks
    const tasksView = document.createElement('div');
    tasksView.classList.add('tasks');
    listView.append(tasksView);

    // newTask
    const newTaskView = document.createElement('div');
    newTaskView.classList.add('newTask');
    newTaskView.innerText = '+';
    newTaskView.addEventListener('click', (e) =>
        newTaskBtn(e.target.parentElement.id)
    );
    listView.append(newTaskView);

    return listView;
}
