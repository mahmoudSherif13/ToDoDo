
let taskId = 0;
let subTaskId = 0;

export let subTask = (title)=>{
    let _title = title;
    let _checked = false;
    let _id = subTaskId++;

    let getSubTitle = ()=>_title;
    let setSubTitle = (title)=>_title = title;

    let getChecked = ()=>_checked;
    let setComplete = ()=>_checked = true;
    let setActive = ()=>_checked = false;

    let getId = ()=>_id;

    return{
        getSubTitle,
        setSubTitle,
        getChecked,
        setActive,
        setComplete,
        getId
    }
};

export let task = (title)=>{

    let _id = taskId++;
    let _title = title;
    let _description;
    let _dueDate;
    let _priority = 2;
    let _notes;
    let _subTasksList = {};
    let _checked = false ;
    let _subTasksId = 0;

    let getId = ()=>_id;

    let getTitle = ()=>_title;
    let setTitle = (title)=>_title = title;
    
    let getDescription = ()=>_description;
    let setDescription = (description)=> _description = description; 

    let getDueDate = ()=>_dueDate;
    let clearDueDate = ()=> _dueDate = undefined;
    let setDueDate = (date)=>_dueDate = date;
    
    let getPriority = ()=>_priority;
    let setPriority = (priority)=>{
        if(1 <= priority && priority <= 3){
            _priority = priority;
        }
    };

    let getNotes = ()=>_notes;
    let setNotes = (notes)=>_notes = notes;

    let getChecklist = ()=>_subTasksList;
    let addSubTask = (checklistItemTitle)=>_subTasksList[_subTasksId] = subTask(checklistItemTitle , _subTasksId++);
    let deleteSubTask = (checklistItemId)=> delete _subTasksList[checklistItemId];

    let getChecked = ()=>_checked;
    let setComplete = ()=>_checked = true;
    let setActive = ()=>_checked = false;

    return{
        getId,
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        clearDueDate,
        setDueDate,
        getPriority,
        setPriority,
        getNotes,
        setNotes,
        getChecklist,
        addSubTask,
        deleteSubTask,
        getChecked,
        setComplete,
        setActive
    };
};
