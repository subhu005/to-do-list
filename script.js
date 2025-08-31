const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearAllBtn = document.getElementById("clearAllBtn");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e){
  if(e.key === "Enter") addTask();
});

clearAllBtn.addEventListener("click", function(){
  taskList.innerHTML = ""; // clear all tasks
});

function addTask(){
  const taskText = taskInput.value.trim();
  if(taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function(){
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
