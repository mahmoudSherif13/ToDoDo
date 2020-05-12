import { genListId } from '../interfaces/storgeInterface';

export let List = (title) => {
    let _title = title;
    let _tasks = {};
    let _id = genListId();

    let getTitle = () => _title;

    let getTasks = () => _tasks;
    let addTask = (task) => (_tasks[task.getId()] = task);
    let deleteTask = (id) => delete _tasks[id];

    let getId = () => _id;

    return {
        getTitle,
        getTasks,
        addTask,
        deleteTask,
        getId,
    };
};
