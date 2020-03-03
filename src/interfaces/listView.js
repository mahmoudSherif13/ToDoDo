export function getListView(taskList){
    let view = document.createElement("div");
    view.classList.add("row");
    view.setAttribute("data-id", taskList.getId());
    view.innerText = taskList.getTitle();
    return view;
}