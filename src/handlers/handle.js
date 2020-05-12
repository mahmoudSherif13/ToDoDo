import { getTaskView } from '../interfaces/taskView';
import { List } from '../classes/list';
import { getListView } from '../interfaces/listView';
import { Task } from '../classes/task';

let lists = {};
let tasks = {};

let listsHolder = document.getElementById('listsHolder');

function createNewList(title) {
    const list = List(title);
    const listView = getListView(list);

    lists[list.getId()] = list;
    listsHolder.append(listView);
}

export function createTask(title, listId) {
    const task = Task(title);
    const taskView = getTaskView(task);
    const listTasks = document.getElementById(listId).querySelector('.tasks');

    tasks[task.getId()] = task;
    listTasks.append(taskView);
}

export function init() {
    const newListBtn = document.getElementById('newList');
    const titleView = document.getElementById('listTitle');
    newListBtn.addEventListener('click', () => {
        const title = titleView.value;
        createNewList(title);
    });
}
