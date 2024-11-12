function getFormattedDate() {
  const date = new Date();

  const year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}

async function getWeatherDetails(location = "Delhi") {
  const apiKey = "BJCPFH9PN5H9AYVG9BKMZ34WH";
  const endPoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
                      ${location}/${getFormattedDate()}?key=${apiKey}`;

  try {
    const response = await fetch(endPoint);
    // console.log(response);
    const json_response = await response.json();
    // console.log(json_response);
    return json_response;
  } catch (err) {
    console.log(err);
  }
}

async function processData() {
  const rawData = await getWeatherDetails();

  let location = rawData["resolvedAddress"].split(",");
  console.log(location);
  location = location[0] + "," + location.at(-1);
  console.log(location);
  console.log(new Date().toLocaleString());
  const data = rawData["days"][0];
  const temp = data["temp"];
  console.log(temp);
  const condition = data["conditions"];
  console.log(condition);

  const feelsLike = data["feelslike"];
  console.log(feelsLike);

  const humidity = data["humidity"] + "%";
  console.log(humidity);

  const windspeed = data["windspeed"] + "km/hr";
  console.log(windspeed);
}

processData();
