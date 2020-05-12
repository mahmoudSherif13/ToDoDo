import { List } from './classes/list';
import { Task } from './classes/task';

let lists = {};
let tasks = {};
let curId = -1;

const listsHolder = document.getElementById('listsHolder');
const taskIdView = document.getElementById("taskId");
const newListBtn = document.getElementById('newList');
const titleView = document.getElementById('listTitle');
const editTaskPriority = document.getElementById("editTaskPriority");
const editTaskText = document.getElementById("editTaskText");
const editFormView = document.querySelector('[name="editTask"]');

function createNewList(title) {
    const list = List(title);
    const listView = getListView(list);

    lists[list.getId()] = list;
    listsHolder.append(listView);
}

function createTask(title, listId) {
    const task = Task(title);
    const taskView = getTaskView(task);
    const listTasks = document.getElementById(listId).querySelector('.tasks');

    tasks[task.getId()] = task;
    listTasks.append(taskView);
}

function deleteTask(TaskId) {
    document.getElementById(TaskId).remove();
}

function editTask(Task) {
    // edit view
    const taskView = document.getElementById(curId);
    taskView.querySelector(".taskName").innerHTML = Task.getTitle();

    tasks[curId] = Task;
}

function editTaskForm(){
    console.log("form sub");
    const title = editTaskText.value;
    const priority = editTaskPriority.value;
    const edTask = Task(title);
    edTask.setPriority(priority);
    editTask(edTask);
    editFormView.style.visibility = "hidden";
}

function init() {
    newListBtn.addEventListener('click', () => {
        const title = titleView.value;
        createNewList(title);
    });
    editFormView.addEventListener("submit",editTaskForm);
}

function getTaskView(task) {
    // task
    const taskView = document.createElement('div');
    taskView.classList.add('task');
    taskView.setAttribute('id', task.getId());

    // Priority
    /// TODO : set the color based on the Priority
    const PriorityView = document.createElement('span');
    PriorityView.classList.add('priority');
    taskView.append(PriorityView);

    // title
    const titleView = document.createElement('div');
    titleView.classList.add("taskName");
    titleView.innerText = task.getTitle();
    taskView.append(titleView);

    taskView.addEventListener('dblclick',()=>{
        deleteTask(task.getId());
    });

    taskView.addEventListener('click',()=>{
        curId = taskIdView.innerText = task.getId();
        editFormView.style.visibility = "visible";
        console.log(curId);
    });

    return taskView;
}

// list
function newTaskBtn(id) {
    let title = prompt('task title');
    createTask(title, id);
}
function getListView(list) {
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

init();