export function getListView(taskList) {
    // list
    const listView = document.createElement("div");
    listView.classList.add("list");
    listView.setAttribute("id", taskList.getId());

    // title
    const titleView = document.createElement("div");
    titleView.classList.add("list-name");
    titleView.innerText = taskList.getTitle();
    listView.append(titleView);

    // tasks
    const tasksView = document.createElement("div");
    tasksView.classList.add("tasks");
    listView.append(tasksView);

    // newTask
    const newTaskView = document.createElement("div");
    newTaskView.classList.add("newTask");
    listView.append(newTaskView);

    return listView;
}