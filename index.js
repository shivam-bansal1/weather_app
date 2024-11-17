import { createLeftSection } from "./script.js";
import { createRightSection } from "./script.js";
import { tempConverter } from "./script.js";
import { processData } from "./data.js";

async function renderWebsite(location = "Delhi") {
  const mainSection = document.querySelector("main");
  mainSection.textContent = "";
  const container = document.createElement("div");
  container.className = "container";

  let data = await processData(location);
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

renderWebsite();
