const addLink = document.querySelector("#link-add")
const addView = document.querySelector("#add-view")
const listLink = document.querySelector("#link-list")
const listView = document.querySelector("#list-view")
const homeLink = document.querySelector("#link-home")
const homeView = document.querySelector("#home-view")
const listBtn = document.querySelector("#listFlowersBtn")
let randBtn = document.querySelector("#random-button")
let addBtn = document.querySelector("#addFlowerBtn")
let btn_count = 0


// Navagation listeners
addLink.addEventListener("click", () => {
  homeView.classList.add("hidden")
  listView.classList.add("hidden")

  document.querySelector("#random-button").disabled = false

  addView.classList.add("visible")
  addView.classList.remove("hidden")

})


listLink.addEventListener("click", () => {
  homeView.classList.add("hidden")
  addView.classList.add("hidden")

  document.querySelector("#random-button").disabled = true

  listView.classList.add("visible")
  listView.classList.remove("hidden")
})


homeLink.addEventListener("click", () => {
  addView.classList.add("hidden")
  listView.classList.add("hidden")

  document.querySelector("#random-button").disabled = false

  homeView.classList.add("visible")
  homeView.classList.remove("hidden")

})

// List event listener
listBtn.addEventListener("click", () => {
  viewFlowers()
})

randBtn.addEventListener('click', () => {
  countClicks()
})

addBtn.addEventListener('click', () => {
  createFlower()
})
