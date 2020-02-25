let todoList = (title)=>{
    let _title = title;
    let _todosList = {};
    let _id = 0;

    let getTitle = ()=>_title;
    let getTodosList = ()=>_todosList;
    let addTodo = (todo)=> _todosList[_id++] = todo;
    let deleteTodo = (id)=> delete _todos[id];

    return{
        getTitle,
        getTodosList,
        addTodo,
        deleteTodo
    };
};
export{todoList};