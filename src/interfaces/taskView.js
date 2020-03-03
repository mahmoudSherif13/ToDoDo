const priorityColors = ["green","#c9c300","red"];

const getCompletedTaskView = (todo)=>{
    const row = document.createElement('li');
    row.classList.add("Task");

    const title = document.createElement("span");
    title.classList.add("title");

    title.style.textDecoration = "line-through";
    title.innerText = todo.getTitle();

    row.append(title);
    return row;
};

const getSubTasksViews = (todo)=>{
    const subList = document.createElement("ul");
    let subTasks = todo.getChecklist();

    for(let subTaskKey in subTasks){
        let subTask = subTasks[subTaskKey];
        const subTaskView = document.createElement("li");
        subTaskView.classList.add("Task");
        subTaskView.innerText = subTask.getTitle();
        subList.append(subTaskView);
    }
    return subList;
};

export const getTaskView = (todo)=>{

    if(todo.getChecked()){
        return getCompletedTaskView(todo);
    }

    const row = document.createElement('li');
    row.classList.add("Task");

    const title = document.createElement("span");
    title.classList.add("title");

    const notes = document.createElement("span");
    notes.classList.add("note");


    title.innerText = todo.getTitle();
    title.style.color = priorityColors[todo.getPriority() -1];

    row.append(title);

    if(todo.getNotes()){
        notes.innerText = todo.getNotes();
        row.append(notes);
    }
    
    let x = Object.keys(todo.getChecklist()).length;
    if(x){
        row.append(getSubTasksViews(todo));
    }

    return row;
};
