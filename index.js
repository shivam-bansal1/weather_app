import { createLeftSection } from "./script.js";
import { createRightSection } from "./script.js";
import { tempConverter } from "./script.js";
import { processData } from "./data.js";
const imageFolderPath = "./images/";

async function renderWebsite(location = "Delhi") {
  let data = await processData(location);

  updateBackgroundImage(data);
  const mainSection = document.querySelector("main");
  mainSection.innerHTML = "";
  const container = document.createElement("div");
  container.className = "container";

  container.appendChild(createLeftSection());
  container.appendChild(createRightSection(data));
  mainSection.appendChild(container);

  tempConverter();
  updateLocation();
}

function fetchLocation() {
  let loactionField = document.querySelector("#location-input");
  const location = loactionField.value;

  if (location) {
    document.querySelector(".container").textContent = "";
    renderWebsite(location);
  } else {
    alert("Location can't be empty");
  }
}

function updateLocation() {
  let loactionField = document.querySelector("#location-input");
  let searchButton = document.querySelector(".search-button");

  loactionField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      fetchLocation();
    }
  });

  searchButton.addEventListener("click", fetchLocation);
}

function updateBackgroundImage(data) {
  const previousImg = document.querySelector(".bg-image");
  previousImg.parentNode.removeChild(previousImg);

  const weatherCondition = data["condition"].toLowerCase();
  let imgSrc;

  if (weatherCondition.indexOf("clear") > -1) {
    imgSrc = `${imageFolderPath}/clear.jpg`;
  } else if (weatherCondition.indexOf("rain") > -1) {
    imgSrc = `${imageFolderPath}/rain.jpg`;
  } else if (weatherCondition.indexOf("sun") > -1) {
    imgSrc = `${imageFolderPath}/sunny.jpg`;
  } else if (weatherCondition.indexOf("storm") > -1) {
    imgSrc = `${imageFolderPath}/thunderstorm.jpg`;
  } else {
    imgSrc = `${imageFolderPath}/main-background.jpg`;
  }

  const bgImage = document.createElement("img");
  bgImage.className = "bg-image";
  bgImage.src = imgSrc;
  document.body.appendChild(bgImage);
}

renderWebsite();
