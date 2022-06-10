let theInputes = document.querySelectorAll("input");
let removeButton = document.querySelector("button");
let theContainer = document.querySelector("section");
let theTaskContainer = document.querySelector("ul");

theInputes[1].addEventListener("click", addTask);
theContainer.addEventListener("click", addCheck);
removeButton.addEventListener("click", removeTheTask);

function addTask() {}
function addCheck(eve) {
  if (eve.target.nodeName == "P" || eve.target.nodeName == "LI") {
    let theELement = document.querySelector("li>p");
    let theCheck = document.querySelector("i");
    theELement.classList.toggle("selected");
    theCheck.classList.toggle("show");
  }
}
function removeTheTask(eve) {
  let theTask = eve.target.parentElement;
  theTaskContainer.removeChild(theTask);
}
