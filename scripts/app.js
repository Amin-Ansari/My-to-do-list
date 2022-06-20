let theInputes = document.querySelectorAll("input");
let removeButtons = document.querySelectorAll("button");
let theContainer = document.querySelector("section");
let theTaskContainer = document.querySelector("ul");

document.addEventListener("DOMContentLoaded", loadTasks);
theInputes[1].addEventListener("click", addTask);
theContainer.addEventListener("click", addCheck);
document.addEventListener("click", removeTheTask);

function addTask() {
  if (theInputes[0].value) {
    addTaskToLocal(theInputes[0].value);
    theInputes[0].value = "";
  }
}
function addCheck(eve) {
  if (eve.target.nodeName == "P" || eve.target.nodeName == "LI") {
    if (eve.target.nodeName == "P") {
      let theTask = eve.target.parentElement;
      theTask.firstElementChild.classList.toggle("show");
      theTask.firstElementChild.nextElementSibling.classList.toggle("selected");
      theTask.classList.toggle("hover-state");
      theTask.classList.toggle("selected-bg");
    } else if (eve.target.nodeName == "LI") {
      let theTask = eve.target;
      theTask.classList.toggle("hover-state");
      theTask.classList.toggle("selected-bg");
    }
  }
}
function loadTasks() {
  document.querySelector(".task-container").innerHTML = "";
  if (localStorage.length) {
    for (let i = 0; i < localStorage.length; i++) {
      let taskValue = localStorage.key(i);
      if (localStorage.getItem(taskValue) == "false") {
        let theTask = taskCreator();
        let checkElement = checkCreator();
        let pElement = pCreator();
        let removeButton = buttonCreator();
        pElement.innerHTML = localStorage.key(i);
        theTask.appendChild(checkElement);
        theTask.appendChild(pElement);
        theTask.appendChild(removeButton);
        theTaskContainer.appendChild(theTask);
      } else if (localStorage.getItem(taskValue) == "true") {
        let theTask = taskCreator();
        let checkElement = checkCreator();
        let pElement = pCreator();
        let removeButton = buttonCreator();
        theTask.classList.replace("hover-state", "selected-bg");
        checkElement.classList.add("show");
        pElement.innerHTML = localStorage.key(i);
        pElement.classList.add("selected");
        theTask.appendChild(checkElement);
        theTask.appendChild(pElement);
        theTask.appendChild(removeButton);
        theTaskContainer.appendChild(theTask);
      }
    }
  }
}
function addTaskToLocal(task) {
  localStorage.setItem(task, "false");
  loadTasks();
}
function removeTheTask(eve) {
  if (eve.target.nodeName == "BUTTON") {
    let theTask = eve.target.parentElement;
    let allLi = document.querySelectorAll("li");
    for (let i = 0; i < localStorage.length; i++) {
      if (allLi[i] === theTask) {
        localStorage.removeItem(localStorage.key(i));
        loadTasks();
      }
    }
    theTaskContainer.removeChild(theTask);
  }
}
function taskCreator() {
  let theElement = document.createElement("li");
  theElement.classList.add("task");
  theElement.classList.add("hover-state");
  return theElement;
}
function checkCreator() {
  let theELement = document.createElement("i");
  theELement.setAttribute("class", "check");
  return theELement;
}
function pCreator() {
  let theElement = document.createElement("p");
  return theElement;
}
function buttonCreator() {
  let theELement = document.createElement("button");
  return theELement;
}
