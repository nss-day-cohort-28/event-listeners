viewFlowers = () => {
  const flowerList = document.querySelector("#flowerList")
  const flowerData = getFlowers()
  flowerList.innerHTML = ""
  flowerData.forEach(flower => {
    flowerList.innerHTML += `<li>${flower.commonName}</li>`
  })
}
