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

async function getWeatherDetails(location) {
  const apiKey = "BJCPFH9PN5H9AYVG9BKMZ34WH";
  const endPoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
                      ${location}/${getFormattedDate()}?key=${apiKey}`;

  try {
    const response = await fetch(endPoint, { mode: "cors" });
    const json_response = await response.json();
    return json_response;
  } catch (err) {
    console.error("Error in getWeatherDetails:", err.message);
  }
}

export async function processData(location) {
  try {
    const rawData = await getWeatherDetails(location);

    let area = rawData["resolvedAddress"].split(",");
    area = area[0] + "," + area.at(-1);
    const data = rawData["days"][0];
    const temp = data["temp"];
    const condition = data["conditions"];
    const feelsLike = data["feelslike"];
    const humidity = data["humidity"] + "%";
    const windspeed = data["windspeed"] + "km/hr";

    return { area, temp, condition, feelsLike, humidity, windspeed };
  } catch (err) {
    alert(err);
    console.error("Error in processData:", err.message);
  }
}
