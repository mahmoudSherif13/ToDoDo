const priorityColors = ['green', '#c9c300', 'red'];

const getCompletedTaskView = (todo) => {
    const row = document.createElement('li');
    row.classList.add('Task');

    const title = document.createElement('span');
    title.classList.add('title');
    title.setAttribute('data-id', todo.getId());

    title.style.textDecoration = 'line-through';
    title.innerText = todo.getTitle();

    row.append(title);
    return row;
};

const getSubTasksViews = (todo) => {
    const subList = document.createElement('ul');
    let subTasks = todo.getChecklist();

    for (let subTaskKey in subTasks) {
        let subTask = subTasks[subTaskKey];
        const subTaskView = document.createElement('li');
        subTaskView.classList.add('Task');
        subTaskView.innerText = subTask.getTitle();
        subList.append(subTaskView);
    }
    return subList;
};

export function getTaskView(task) {
    // task
    const taskView = document.createElement('div');
    taskView.classList.add('task');
    taskView.setAttribute('id', task.getId());

    // Priority
    /// TODO : set the color based on the Priority
    const PriorityView = document.createElement('span');
    PriorityView.classList.add('pre');
    taskView.append(PriorityView);

    // title
    const titleView = document.createElement('div');
    titleView.innerText = task.getTitle();
    taskView.append(titleView);

    return taskView;
}
