import {genTaskListId} from '../interfaces/storgeInterface'


export let TaskList = (title)=>{
    let _title = title;
    let _tasksList = {};
    let _id = genTaskListId();

    let getTitle = ()=>_title;

    let getTasksList = ()=>_tasksList;
    let addTask = (task)=> _tasksList[task.getId()] = task;
    let deleteTask = (id)=> delete _tasksList[id];

    let getId = ()=>_id;

    return{
        getTitle,
        getTasksList,
        addTask,
        deleteTask,
        getId
    };
};