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
