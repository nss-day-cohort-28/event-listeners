createFlower = () => {
  const flowerInput = document.querySelector("#flowerInput")
  const flowerName = flowerInput.value
  const flowerId = getFlowers().length + 1
  const flower = {
    "id": flowerId,
    "commonName": flowerName
  }
  saveFlower(flower)
  flowerInput.value = ""
}
