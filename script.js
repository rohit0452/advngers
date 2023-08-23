document.addEventListener("DOMContentLoaded", () => {
const bottomBoxes = document.getElementById("palette-section");
const colorPicker = document.getElementById("color-picker");
const copyButton = document.getElementById("copy-button");
const selectedColour = document.getElementById("selected-color");

let currentPalette = generatePalette(chroma("#000000"));

function generatePalette(baseColor) {
const generatedColours = chroma
  .scale(["white", baseColor, "black"])
  .colors(16);
copyButton.style.backgroundColor = baseColor;
return [...generatedColours];
}

function displayPalette(colors) {
bottomBoxes.innerHTML = "";
colors.forEach((color) => {
  const createDiv = document.createElement("div");
  createDiv.style.backgroundColor = color;
  createDiv.classList.add("color-boxes");
  bottomBoxes.appendChild(createDiv);
});
}

colorPicker.addEventListener("change", () => {
const selectedColor = colorPicker.value;
selectedColour.innerText =  "Selected color is : "  + selectedColor
currentPalette = generatePalette(selectedColor);
displayPalette(currentPalette);
});

copyButton.addEventListener("click", () => {
const hexValues = currentPalette.map((color) => chroma(color).hex());
navigator.clipboard.writeText(hexValues);
window.alert("Color codes copied to clipboard successfuly.");
});

displayPalette(currentPalette);
});

