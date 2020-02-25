let Todo = (title)=>{

    const STATS = {
        ACTIVE:1,
        COMPLETED:2,
        HIDDEN:3
    };


    let _title = title;
    let _description;
    let _dueDate;
    let _priority = 2;
    let _notes;
    let _checklist = {};
    let _stat = STATS.ACTIVE;
    let _checklistId = 0;


    let ChecklistItem = (subTitle , id)=>{
        let _subTitle = subTitle;
        let _checked = false;
        let _id = id;

        let getSubTitle = ()=>_subTitle;
        let setSubTitle = (subTitle)=>_subTitle = subTitle;

        let getChecked = ()=>_checked;
        let toggleChecked = ()=>_checked = !_checked;

        let getId = ()=>_id;

        return{
            getSubTitle,
            setSubTitle,
            getChecked,
            toggleChecked,
            getId
        }
    };

    let getTitle = ()=>_title;
    let setTitle = (title)=>_title = title;
    
    let getDescription = ()=>_description;
    let setDescription = (description)=> _description = description; 

    let getDueDate = ()=>_dueDate;
    let setDueData = (dueDate)=> _dueDate = dueDate;
    
    let getPriority = ()=>_priority;
    let setPriority = (priority)=>{
        if(1 <= priority && priority <= 3){
            _priority = priority;
        }
    };

    let getNotes = ()=>_notes;
    let setNotes = (notes)=>_notes = notes;

    let getChecklist = ()=>_checklist;
    let addChecklistItem = (checklistItemTitle)=>_checklist[_checklistId] = ChecklistItem(checklistItemTitle , _checklistId++);
    let toggleChecklistItem = (checklistItemId)=> _checklist[checklistItemId] = !_checklist[checklistItemId];
    let deleteChecklistItem = (checklistItemId)=> delete _checklist[checklistItemId];

    let getStat = ()=>_stat;
    let setComplete = ()=>_stat = STATS.COMPLETED;
    let setActive = ()=>_stat = STATS.ACTIVE;
    let setHidden = ()=>_stat = STATS.HIDDEN;
    

    return{
        STATS,
        ChecklistItem,
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueData,
        getPriority,
        setPriority,
        getNotes,
        setNotes,
        getChecklist,
        addChecklistItem,
        toggleChecklistItem,
        deleteChecklistItem,
        getStat,
        setComplete,
        setActive,
        setHidden
    };

};

export {Todo};