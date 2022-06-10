let theInputes = document.querySelectorAll("input");
let removeButtons = document.querySelectorAll("button");
let theContainer = document.querySelector("section");
let theTaskContainer = document.querySelector("ul");

console.log(removeButtons);
theInputes[1].addEventListener("click", addTask);
theContainer.addEventListener("click", addCheck);
document.addEventListener("click", removeTheTask);

function addTask() {
  let theTask = taskCreator();
  let checkElement = checkCreator();
  let pElement = pCreator();
  let removeButton = buttonCreator();
  pElement.innerHTML = theInputes[0].value;
  theTask.appendChild(checkElement);
  theTask.appendChild(pElement);
  theTask.appendChild(removeButton);
  theTaskContainer.appendChild(theTask);
  theInputes[0].value = "";
}
function addCheck(eve) {
  if (eve.target.nodeName == "P" || eve.target.nodeName == "LI") {
    let theELement = document.querySelector("li>p");
    let theCheck = document.querySelector("i");
    theELement.classList.toggle("selected");
    theCheck.classList.toggle("show");
  }
}
function removeTheTask(eve) {
  if (eve.target.nodeName == "BUTTON") {
    let theTask = eve.target.parentElement;
    theTaskContainer.removeChild(theTask);
  }
}
function taskCreator() {
  let theElement = document.createElement("li");
  theElement.setAttribute("class", "task");
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
