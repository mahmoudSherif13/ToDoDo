export function getTaskListRow(taskList){
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("sel");
    row["data-id"] = taskList.getId();
    row.innerText = taskList.getTitle();
    return row;
}