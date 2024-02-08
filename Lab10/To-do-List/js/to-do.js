var todoInput = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var todoList = document.getElementById("taskList"); //ul

addBtn.addEventListener("click", function () {
  var createdList = document.createElement("li");
  createdList.style.listStyle = "none";
  createdList.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  var input = todoInput.value;
  if (input === "") {
    alert("Please enter a task");
    return;
  }
  // createdList.appendChild(document.createTextNode(input));
  createdList.innerText = input;

  var tasks = localStorage.getItem("tasks");
  if (tasks === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasks);
  }

  tasks.push(input);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  todoInput.value = "";

  var buttonsDiv = document.createElement("div");

  var checkBtn = document.createElement("button");
  checkBtn.classList.add("btn", "btn-success", "me-2");
  checkBtn.innerText = "Done";

  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-danger");
  deleteBtn.innerText = "Delete";

  buttonsDiv.appendChild(checkBtn);
  buttonsDiv.appendChild(deleteBtn);

  createdList.appendChild(buttonsDiv);

  todoList.appendChild(createdList);

  checkBtn.addEventListener("click", function () {
    // createdList.style.textDecoration = "line-through";
    createdList.style.color = "green";
    createdList.style.backgroundColor = "#c8e6c9";
  });

  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(createdList);
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(tasks.indexOf(input), 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
  });
});
