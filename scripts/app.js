let theInputes = document.querySelectorAll("input");
let theAddButton = document.querySelector("input[type=button]");
let removeButtons = document.querySelectorAll("button");
let theContainer = document.querySelector("section");
let theTaskContainer = document.querySelector("ul");
let theForm = document.querySelector("form");
let calendarInput = document.querySelector("input[type=date]");
let date = new Date();
calendarInput.value = setCalendar();
let taskList = [];

theForm.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    e.preventDefault();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    addTask();
  }
});
document.addEventListener("DOMContentLoaded", loadTasks);
theAddButton.addEventListener("click", addTask);
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
      theTask.firstElementChild.nextElementSibling.classList.toggle("selected");
      theTask.classList.toggle("hover-state");
      theTask.classList.toggle("selected-bg");
      checkBoxToggle(theTask.firstElementChild.firstElementChild);
      activeCheck(
        theTask.firstElementChild.firstElementChild,
        theTask.firstElementChild
      );
      if (localStorage.getItem(theTask.textContent) == "false") {
        localStorage.setItem(theTask.textContent, "true");
      } else if (localStorage.getItem(theTask.textContent) == "true") {
        localStorage.setItem(theTask.textContent, "false");
      }
    } else if (eve.target.nodeName == "LI") {
      let theTask = eve.target;
      theTask.classList.toggle("hover-state");
      theTask.classList.toggle("selected-bg");
      if (localStorage.getItem(theTask.textContent) == "false") {
        localStorage.setItem(theTask.textContent, "true");
      } else if (localStorage.getItem(theTask.textContent) == "true") {
        localStorage.setItem(theTask.textContent, "false");
      }
    }
  }
}
function loadTasks() {
  document.querySelector(".task-container").innerHTML = "";
  // if (localStorage.length) {
  //   for (let i = localStorage.length - 1; i >= 0; i--) {
  //     let taskValue = localStorage.key(i);
  //     if (localStorage.getItem(taskValue) == "false") {
  //       let theTask = taskCreator();
  //       let checkContainer = document.createElement("div");
  //       checkContainer.classList.add("check-box-container");
  //       let checkBox = document.createElement("input");
  //       let pElement = pCreator();
  //       let removeButton = buttonCreator();
  //       let editButton = spanCreator();
  //       pElement.innerHTML = localStorage.key(i);
  //       checkBox.setAttribute("type", "checkbox");
  //       checkBox.setAttribute("name", "do-check");
  //       checkContainer.appendChild(checkBox);
  //       checkBox.removeAttribute("checked");
  //       activeCheck(checkBox, checkContainer);
  //       theTask.appendChild(checkContainer);
  //       theTask.appendChild(pElement);
  //       theTask.appendChild(editButton);
  //       theTask.appendChild(removeButton);
  //       theTaskContainer.appendChild(theTask);
  //     } else if (localStorage.getItem(taskValue) == "true") {
  //       let theTask = taskCreator();
  //       let pElement = pCreator();
  //       let editButton = spanCreator();
  //       let removeButton = buttonCreator();
  //       theTask.classList.replace("hover-state", "selected-bg");
  //       pElement.innerHTML = localStorage.key(i);
  //       pElement.classList.add("selected");
  //       let checkContainer = document.createElement("div");
  //       checkContainer.classList.toggle("check-box-container");
  //       let checkBox = document.createElement("input");
  //       checkBox.setAttribute("type", "checkbox");
  //       checkBox.setAttribute("name", "do-check");
  //       checkBox.setAttribute("checked", "checked");
  //       activeCheck(checkBox, checkContainer);
  //       checkContainer.appendChild(checkBox);
  //       theTask.appendChild(checkContainer);
  //       theTask.appendChild(pElement);
  //       theTask.appendChild(editButton);
  //       theTask.appendChild(removeButton);
  //       theTaskContainer.appendChild(theTask);
  //     }
  //   }
  // }
  taskList = JSON.parse(localStorage.getItem(calendarInput.value));
  if (taskList) {
    for (let element of taskList) {
      console.log(element);
    }
  }
}
function checkBoxToggle(checkBox) {
  if (!checkBox.getAttribute("checked")) {
    checkBox.setAttribute("checked", "checked");
  } else if (checkBox.getAttribute("checked")) {
    checkBox.removeAttribute("checked");
  }
}
function activeCheck(input, container) {
  if (input.getAttribute("checked")) {
    container.classList.add("check-mark");
  } else if (!input.getAttribute("checked")) {
    container.classList.remove("check-mark");
  }
}
function addTaskToLocal(task) {
  taskList = JSON.parse(localStorage.getItem(calendarInput.value));
  if (taskList) {
    taskList.push({
      taskName: `${task}`,
      taskStatus: "false",
    });
  } else {
    taskList = [
      {
        taskName: `${task}`,
        taskStatus: "false",
      },
    ];
  }
  localStorage.setItem(calendarInput.value, JSON.stringify(taskList));
  taskListReset();
  loadTasks();
}
function removeTheTask(eve) {
  if (eve.target.nodeName == "BUTTON") {
    let theTask = eve.target.parentElement;
    localStorage.removeItem(theTask.textContent);
    loadTasks();
  }
}
function taskCreator() {
  let theElement = document.createElement("li");
  theElement.classList.add("task");
  theElement.classList.add("hover-state");
  return theElement;
}
function pCreator() {
  let theElement = document.createElement("p");
  return theElement;
}
function buttonCreator() {
  let theELement = document.createElement("button");
  return theELement;
}
function spanCreator() {
  let theELement = document.createElement("span");
  return theELement;
}
function setCalendar() {
  let dateList = [];
  dateList.push(date.getFullYear());
  dateList.push(date.getMonth());
  dateList.push(date.getDate());
  for (let i = 0; i < dateList.length; i++) {
    if (dateList[i] < 10) {
      dateList[i] = "0" + String(dateList[i]);
    }
  }
  let todayDate = `${dateList[0]}-${dateList[1]}-${dateList[2]}`;
  return todayDate;
}

function taskListReset() {
  taskList = [];
}
// let checkContainer = document.createElement("div");
// checkContainer.classList.toggle("check-box-container");
// let checkBox = document.createElement("input");
// checkBox.setAttribute("type", "checkbox");
// checkBox.setAttribute("name", "do-check");
// checkContainer.appendChild(checkBox);
