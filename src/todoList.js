let todoList = (title)=>{
    let _title = title;
    let _todosList = {};

    let getTitle = ()=>_title;
    let getTodosList = ()=>_todosList;
    let addTodo = (todo)=> _todosList[todo.id] = todo;
    let deleteTodo = (todo)=> delete _todos[todo.id];

    return{
        getTitle,
        getTodosList,
        addTodo,
        deleteTodo
    };
};
export{todoList};