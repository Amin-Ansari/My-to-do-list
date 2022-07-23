let theInputes = document.querySelectorAll("input");
let theAddButton = document.querySelector("input[type=button]");
let removeButtons = document.querySelectorAll("button");
let theContainer = document.querySelector("section");
let theTaskContainer = document.querySelector("ul");
let theForm = document.querySelector("form");
let calendarInput = document.querySelector(".calendar-input");
let date = new persianDate();
let taskList = [];
let changeModalBox = document.querySelector(".change-box");
let editedtText = document.querySelector(".edit-text-input");
let modalSubmit = document.querySelector(".submit-button");
let selectedIndex;

jalaliDatepicker.startWatch();
// The bottom code set todays's date as default value of datepicker
calendarInput.value = setCalendar();

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
document.addEventListener("click", openModal);
modalSubmit.addEventListener("click", submitTheEdit);
editedtText.addEventListener("keypress", function (even) {
  if (even.code === "Enter") {
    submitTheEdit();
  }
});
calendarInput.addEventListener("change", loadTasks);
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
      for (let element of taskList) {
        if (element.taskName == theTask.textContent) {
          if (element.taskStatus == "false") {
            element.taskStatus = "true";
            localStorage.setItem(calendarInput.value, JSON.stringify(taskList));
          } else if (element.taskStatus == "true") {
            element.taskStatus = "false";
            localStorage.setItem(calendarInput.value, JSON.stringify(taskList));
          }
        }
      }
      if (localStorage.getItem(theTask.textContent) == "false") {
        localStorage.setItem(theTask.textContent, "true");
      } else if (localStorage.getItem(theTask.textContent) == "true") {
        localStorage.setItem(theTask.textContent, "false");
      }
    } else if (eve.target.nodeName == "LI") {
      let theTask = eve.target;
      theTask.classList.toggle("hover-state");
      theTask.classList.toggle("selected-bg");
      for (let element of taskList) {
        if (element.taskName == theTask.textContent) {
          if (element.taskStatus == "false") {
            element.taskStatus = "true";
            console.log(taskList);
          } else if (element.taskStatus == "true") {
            element.taskStatus = "false";
            console.log(taskList);
          }
        }
      }
    }
  }
}
function loadTasks() {
  document.querySelector(".task-container").innerHTML = "";
  taskList = JSON.parse(localStorage.getItem(calendarInput.value));
  if (taskList) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].taskStatus == "false") {
        let theTask = taskCreator();
        let checkContainer = document.createElement("div");
        checkContainer.classList.add("check-box-container");
        let checkBox = document.createElement("input");
        let pElement = pCreator();
        let removeButton = buttonCreator();
        let editButton = spanCreator();
        pElement.innerHTML = taskList[i].taskName;
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("name", "do-check");
        checkContainer.appendChild(checkBox);
        checkBox.removeAttribute("checked");
        activeCheck(checkBox, checkContainer);
        theTask.appendChild(checkContainer);
        theTask.appendChild(pElement);
        theTask.appendChild(editButton);
        theTask.appendChild(removeButton);
        theTaskContainer.appendChild(theTask);
      } else if (taskList[i].taskStatus == "true") {
        let theTask = taskCreator();
        let pElement = pCreator();
        let editButton = spanCreator();
        let removeButton = buttonCreator();
        theTask.classList.replace("hover-state", "selected-bg");
        pElement.innerHTML = taskList[i].taskName;
        pElement.classList.add("selected");
        let checkContainer = document.createElement("div");
        checkContainer.classList.toggle("check-box-container");
        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("name", "do-check");
        checkBox.setAttribute("checked", "checked");
        activeCheck(checkBox, checkContainer);
        checkContainer.appendChild(checkBox);
        theTask.appendChild(checkContainer);
        theTask.appendChild(pElement);
        theTask.appendChild(editButton);
        theTask.appendChild(removeButton);
        theTaskContainer.appendChild(theTask);
      }
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
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].taskName == theTask.textContent) {
        taskList.splice(i, 1);
        localStorage.setItem(calendarInput.value, JSON.stringify(taskList));
      }
    }
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
  return date.toLocale("en").format("YYYY/MM/DD");
}
function taskListReset() {
  taskList = [];
}
function openModal(evetObject) {
  if (evetObject.target.nodeName == "SPAN") {
    let parentElem = evetObject.target.parentElement;
    changeModalBox.style = " transform: translateX(50%) scale(1)";
    editedtText.focus();
    for (let i = 0; i < taskList.length; i++) {
      if (parentElem.textContent === taskList[i].taskName) {
        selectedIndex = i;
      }
    }
  } else {
    if (evetObject.target.className == "cancel-button") {
      changeModalBox.style = " transform: translateX(50%) scale(0)";
    }
  }
}
function submitTheEdit() {
  taskList[selectedIndex].taskName = editedtText.value;
  localStorage.setItem(calendarInput.value, JSON.stringify(taskList));
  editedtText.value = "";
  changeModalBox.style = " transform: translateX(50%) scale(0)";
  loadTasks();
}
