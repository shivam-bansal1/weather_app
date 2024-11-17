import { processData } from "./data.js";

let data = await processData("London");

export function createLeftSection() {
  const leftSection = document.createElement("div");
  leftSection.className = "left-section";

  const heading = document.createElement("h1");
  heading.textContent = "Current Weather";
  leftSection.appendChild(heading);

  const subHeading = document.createElement("h2");
  subHeading.textContent = "Enter Location";
  leftSection.appendChild(subHeading);

  const locationIcon = document.createElement("i");
  locationIcon.classList.add("fa-solid", "fa-location-dot");
  locationIcon.setAttribute("id", "location-icon");
  leftSection.appendChild(locationIcon);

  const inputElement = document.createElement("input");
  inputElement.placeholder = "Enter City";

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass");

  const searchButton = document.createElement("button");
  searchButton.className = "search-button";
  searchButton.appendChild(searchIcon);

  const inputField = document.createElement("div");
  inputField.appendChild(inputElement);
  inputField.appendChild(searchButton);
  leftSection.appendChild(inputField);

  const tempInput = document.createElement("input");
  tempInput.type = "checkbox";
  tempInput.className = "toggle";
  tempInput.setAttribute("id", "toggle");
  leftSection.appendChild(tempInput);

  const tempLabel = document.createElement("label");
  tempLabel.setAttribute("for", "toggle");
  tempLabel.className = "switch";
  leftSection.appendChild(tempLabel);

  leftSection.appendChild(
    document.createTextNode("Switch between Celsius/Fahrenheit")
  );

  return leftSection;
}

export function createRightSection() {
  const rightSection = document.createElement("div");
  rightSection.className = "right-section";

  const loaction = document.createElement("h1");
  loaction.textContent = data.area;
  rightSection.appendChild(loaction);

  const dateTime = document.createElement("h3");
  dateTime.textContent = new Date().toLocaleString();
  rightSection.appendChild(dateTime);

  const temperature = document.createElement("h1");
  temperature.className = "temperature";
  temperature.textContent = data.temp + "°C";
  rightSection.appendChild(temperature);

  const conditions = document.createElement("h2");
  conditions.textContent = data.condition;
  rightSection.appendChild(conditions);

  const feelsLike = document.createElement("h3");
  feelsLike.className = "feels-like-temp";
  feelsLike.textContent = "Feels like: " + data.feelsLike + "°C";

  const humidity = document.createElement("h3");
  humidity.textContent = "Humidity: " + data.humidity;

  const divElement = document.createElement("div");
  divElement.appendChild(feelsLike);
  divElement.appendChild(humidity);
  rightSection.appendChild(divElement);

  const windSpeed = document.createElement("h3");
  windSpeed.textContent = "Wind Speed: " + data.windspeed;
  rightSection.appendChild(windSpeed);

  return rightSection;
}

function celciusToFahrenheit(tempInCelcius) {
  tempInCelcius = tempInCelcius.slice(0, -2);
  let tempInFahrenheit = (tempInCelcius * 9) / 5 + 32;
  tempInFahrenheit = Math.round(tempInFahrenheit * 100) / 100;
  return tempInFahrenheit;
}

function fahrenheitToCelcius(tempInFahrenheit) {
  tempInFahrenheit = tempInFahrenheit.slice(0, -2);
  let tempInCelcius = ((tempInFahrenheit - 32) * 5) / 9;
  tempInCelcius = Math.round(tempInCelcius * 100) / 100;
  return tempInCelcius;
}

export function tempConverter() {
  let toggleChecked = document.querySelector("#toggle");
  console.log(toggleChecked);

  toggleChecked.addEventListener("change", () => {
    if (toggleChecked.checked) {
      const tempElement = document.querySelector(".temperature");
      let tempInCelcius = tempElement.textContent;
      let tempInFahrenheit = celciusToFahrenheit(tempInCelcius);
      tempElement.textContent = tempInFahrenheit + "°F";

      const feelsLikeElement = document.querySelector(".feels-like-temp");
      tempInCelcius = feelsLikeElement.textContent;
      tempInCelcius = tempInCelcius.split(":")[1].replace(/ /g, "");
      tempInFahrenheit = celciusToFahrenheit(tempInCelcius);
      feelsLikeElement.textContent = "Feels like: " + tempInFahrenheit + "°F";
    } else {
      const tempElement = document.querySelector(".temperature");
      let tempInFahrenheit = tempElement.textContent;
      let tempInCelcius = fahrenheitToCelcius(tempInFahrenheit);
      tempElement.textContent = tempInCelcius + "°C";

      const feelsLikeElement = document.querySelector(".feels-like-temp");
      tempInFahrenheit = feelsLikeElement.textContent;
      tempInFahrenheit = tempInFahrenheit.split(":")[1].replace(/ /g, "");
      tempInCelcius = fahrenheitToCelcius(tempInFahrenheit);
      feelsLikeElement.textContent = "Feels like: " + tempInCelcius + "°C";
    }
  });
}
