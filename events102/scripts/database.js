const FlowerDatabase = [{
    "id": 1,
    "commonName": "Rose",
  },
  {
    "id": 2,
    "commonName": "Daisy",
  }
];

const getFlowers = () => {
  return FlowerDatabase
}

const getFlower = (id) => {
  return FlowerDatabase.find(flower => flower.id === id)
}

const saveFlower = (flower) => {
  // Verify that the state of the flower meets requirements
  if (
    flower.commonName.length > 0 &&
    flower.hasOwnProperty("id") &&
    flower.hasOwnProperty("commonName") &&
    (FlowerDatabase.find(f => f.id === flower.id) || null) === null
  ) {
    FlowerDatabase.push(flower)
  } else {
    throw "Flower not saved. Missing, or incorrect, required properties."
  }
}
