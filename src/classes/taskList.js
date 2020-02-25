let taskListId = 0;

export let taskList = (title)=>{
    let _title = title;
    let _tasksList = {};
    let _id = taskListId++;

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