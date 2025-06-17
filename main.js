

//const API_KEY = 'ab5897f3ba6f43a0b51134335251706';  


async function getWeather() {
//   const city = document.getElementById('cityInput').value || 'Colombo';
//   const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

 

  //document.getElementById('weather').innerHTML = 'Loading...';
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
  } 


// Load default city on page load
window.onload = getWeather;
