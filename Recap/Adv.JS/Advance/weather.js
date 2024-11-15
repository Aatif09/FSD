async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'bd5d6db1c55613f81c60eed85271139e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.cod === 200) {
      document.getElementById('weatherInfo').innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
    } else {
      document.getElementById('weatherInfo').innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data</p>`;
  }
}
