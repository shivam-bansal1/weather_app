import { processData } from "./data.js";

let data = await processData();

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
  leftSection.appendChild(inputElement);

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
  temperature.textContent = data.temp;
  rightSection.appendChild(temperature);

  const conditions = document.createElement("h2");
  conditions.textContent = data.condition;
  rightSection.appendChild(conditions);

  const feelsLike = document.createElement("h3");
  feelsLike.textContent = "Feels like: " + data.feelsLike;
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
