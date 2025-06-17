async function getWeather() {
  const city = document.getElementById('cityInput').value || 'Colombo';

  try {
    const response = await fetch(`/api/weather?city=${city}`);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    const current = data.current;

    document.getElementById('weather').innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>Temperature:</strong> ${current.temp_c} °C</p>
      <p><strong>Humidity:</strong> ${current.humidity} %</p>
      <p><strong>Wind Speed:</strong> ${current.wind_kph} kph</p>
      <p><strong>UV Index:</strong> ${current.uv}</p>
    `;
  } catch (error) {
    document.getElementById('weather').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

window.onload = () => {
  document.getElementById('cityInput').value = 'Colombo';
  getWeather();
};
