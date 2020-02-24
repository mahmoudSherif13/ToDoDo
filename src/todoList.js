let todoList = function(title){
    let _title = title;
    let _todos = {};

    let getTitle = ()=>_title;
    let getTodos = ()=>_todos;
    let addTodo = (todo)=>{
        _todos[todo.id] = todo;
    };
    let deleteTodo = (todo)=>{
        delete _todos[todo.id];
    };

    return{
        getTitle,
        getTodos,
        addTodo,
        deleteTodo
    };
}
export{todoList};