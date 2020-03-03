import { getTaskView } from "../interfaces/taskView";
import { List } from "../classes/list";
import { getListView } from '../interfaces/listView';
import { Task } from '../classes/task';

let lists  = {};
let listsElements = {};

let tasks = {};
let tasksElements = {};

let curListId;

let listsView = document.getElementById("TasksLists");
let tasksView = document.getElementById("list");
let newListInputView = document.getElementById("newTaskList");
let newTaskInputView = document.getElementById("newTask");

let removeListBtnView = document.getElementById("removeListBtn");
let newListBtnView = document.getElementById("newTaskListBtn");
let newTaskBtnView = document.getElementById("newTaskBtn");
// lists functions 
function addListView(list){
    listsElements[list.getId()] = getListView(list);
}

function addListViewTODom(id){
    listsView.append(listsElements[id]);
}

function createList(title){

    const obj = List(title);
    lists[obj.getId()] = obj;
    addListView(obj);
    return obj.getId();
}

function loadLists(){
    for(let id in lists){
        addListView(lists[id]);
    }
}

function showListsViews(){
    listsView.innerHTML = "";
    for(let key in listsElements){
        listsElements[key].classList.remove("sel");
        listsView.append(listsElements[key]);
    }
}

function setCurList(listId){
    if(curListId && listsElements[curListId])
        listsElements[curListId].classList.remove("sel");
    listsElements[listId].classList.add("sel");
    curListId = listId;
    clearTasksView();
    loadTasks(listId);
    showTasksViews(listId);
}

export function removeList(listId){
    if(!listId){
        prompt("select a list");
    }
    listsElements[listId].remove();
    clearTasksView();
    delete listsElements[listId];
    delete lists[listId];
    curListId = null;
}

// tasks Function

function addTaskView(task){
    tasksElements[task.getId()] = getTaskView(task);
}

function addTaskViewToDom(id){
    tasksView.append(tasksElements[id]);
}

function createTask(title, listId){
    const obj = Task(title);
    lists[listId].addTask(obj);
    addTaskView(obj, listId);
    return obj.getId();
}

function loadTasks(listId){
    tasksElements = {};
    const tasks = lists[listId].getTasks();
    for(let id in tasks ){
        addTaskView(tasks[id])
    }
}

function clearTasksView(){
    tasksElements = {};
    tasksView.innerHTML = "";
}

function showTasksViews(){
    tasksView.innerHTML = "";
    for(let key in tasksElements){
        addTaskViewToDom(key);
    }
}


function listViewHandle(e){
    const listView = e.target;
    let listId = parseInt(listView.attributes["data-id"].value);
    setCurList(listId);
}

function newListBtnHandle(){
    let title = newListInputView.value;
    newListInputView.value = "";
    const listId = createList(title);
    setCurList(listId);
    listsElements[listId].addEventListener('click',listViewHandle);
    addListViewTODom(listId);
}

function newTaskBtnHandle(){
    let title = newTaskInputView.value;
    newTaskInputView.value = "";
    const taskId = createTask(title, curListId);
    addTaskViewToDom(taskId);
}

export function init(){
    newListBtnView.addEventListener('click', newListBtnHandle);
    newTaskBtnView.addEventListener('click', newTaskBtnHandle);    
    removeListBtnView.addEventListener('click', ()=>removeList(curListId));
}
