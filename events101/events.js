console.log("Howdy")

let outputEl = document.getElementById("output-target")
let articleEl = document.getElementsByClassName("article-section")
let header = document.querySelector("#page-header")

function handleSectionClick(event) {
  // console.log("target", event.target, "currentTarget", event.currentTarget)
}

for (let i = 0; i < articleEl.length; i++) {
  articleEl[i].addEventListener("click", handleSectionClick)
}

/*
    Define functions that hold logic to be performed when mouse
    events are triggered by the browser.
*/
function handleHeaderMouseOver(event) {
  outputEl.innerHTML = "You moved your mouse over me"
}

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = "Why u leave me?"
}

/*
    Get a reference to the DOM element with an id of
    "page-header", and attach an event handler for the
    mouseover, and mouseout, events.
 */

header.addEventListener("mouseover", handleHeaderMouseOver)
header.addEventListener("mouseout", handleHeaderMouseOut)


let fieldEl = document.getElementById("keypress-input")

fieldEl.addEventListener("keyup", (event) => {
  outputEl.innerHTML = event.target.value
})

let guineaPig = document.getElementById("guinea-pig")

function toggleClass(newClass) {
  guineaPig.classList.toggle(newClass)
  // console.log("guineaPig.classList", guineaPig.classList)

}

document.getElementById("add-color").addEventListener("click", function (event) {
  console.log("event", event)
  toggleClass("blue")
})

document.getElementById("make-large").addEventListener("click", function () {
  toggleClass("large")
})

document.getElementById("add-border").addEventListener("click", function () {
  toggleClass("bordered")
})

document.getElementById("add-rounding").addEventListener("click", function () {
  toggleClass("rounded")
})


document.querySelector("article").addEventListener("click", function (event) {
  console.log("target", event.target, "currentTarget", event.currentTarget)
})

// currentTarget is WHERE the event listener is attached
// target is where the event is GENERATED
