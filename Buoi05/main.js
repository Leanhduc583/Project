let listTask;
if (localStorage.getItem("listTask") !== null) {
    listTask = localStorage.getItem("listTask")
    listTask = JSON.parse(listTask)}
    else {
    listTask = [];
}

//CREATE
document.getElementById("button-add").onclick = function () {
    let task = document.getElementById("task").value;
    let description = document.getElementById("description").value;
    const obj = {
        task: task,
        description: description,
    };
    listTask.push(obj);
    localStorage.setItem("listTask", JSON.stringify(listTask));
    readTask();
};

//READ
function readTask() {
    let listTaskHTML = "";
    for (let i=0; i<listTask.length; i++) {
        listTaskHTML += `
        <div class="read-task">
          <h3 class="read-task-number">${i+1}</h3>
          <p class="read-task-name">${listTask[i].task}</p>
          <p class="read-task-description">
            ${listTask[i].description}
          </p>
          <div class="read-task-action">
            <button id="red" onclick = deleteTask(${i})>Delete</button>
            <button id="green" onclick = updateTask(${i})>Update</button>
          </div>
        </div>`;
    }
    document.getElementById("list-task").innerHTML = listTaskHTML;
}
readTask()

//UPDATE
  function updateTask(Index) {
       const Update = {
         task: document.getElementById("task").value,
         description: document.getElementById("description").value,
       };
       listTask.splice(Index,1,Update);
    localStorage.setItem("listTask", JSON.stringify(listTask));
    readTask();
  }






//DELETE
 function deleteTask(Index) {
       listTask.splice(Index,1);
       localStorage.setItem("listTask", JSON.stringify(listTask))
       readTask()
 }



