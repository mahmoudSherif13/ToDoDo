let taskId = 0;
let subTaskId = 0;
let taskListId = 0;

let list = {};

let keys = {
    TASK_ID:"taskId",
    SUB_TASK_ID:"subTaskId",
    TASK_LIST_ID:"taskListId",
    LIST:"list"
}

export function genTaskId(){
    return taskId++;
}

export function genSubTaskId(){
    return subTaskId++;
}

export function genTaskListId(){
    return taskListId++;
}

export function save(){
    localStorage.setItem(keys.TASK_ID, JSON.stringify(taskId));
    localStorage.setItem(keys.SUB_TASK_ID, JSON.stringify(subTaskId));
    localStorage.setItem(keys.TASK_LIST_ID, JSON.stringify(taskListId));
    localStorage.setItem(keys.LIST, JSON.stringify(list));
}

export function load(){
    if(!localStorage.getItem(keys.LIST)){
        return;
    }
    taskId = JSON.parse(localStorage.getItem(keys.TASK_ID));
    subTaskId = JSON.parse(localStorage.getItem(keys.SUB_TASK_ID));
    taskListId = JSON.parse(localStorage.getItem(keys.TASK_LIST_ID));
    list = JSON.parse(localStorage.getItem(keys.LIST));
    console.log(`gamed ${taskId}\n`);
}