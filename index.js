let userInput = prompt("Enter froyo flavors:");
let flavorsArray = userInput.split(",");

function getTotalFlavors(flavorsArray) {
  const flavorCounts = {};

  for (let i = 0; i < flavorsArray.length; i++) {
    const flavor = flavorsArray[i];

    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      flavorCounts[flavor] = 1;
    }
  }
  return flavorCounts;
}

