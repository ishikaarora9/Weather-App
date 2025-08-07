const apiKey = "c917f7c8c3e14c429df152539252904";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      result.innerHTML = `
        <p><strong>${data.location.name}, ${data.location.country}</strong></p>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
      `;
    })
    .catch(error => {
      result.innerHTML = error.message;
    });
}

