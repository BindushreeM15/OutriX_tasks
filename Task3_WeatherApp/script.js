const apiKey = "e3a0240883be4ad96ff61ae3d6eb0f06"; 
const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("location").innerHTML = `❌ City not found`;
        document.getElementById("temp").textContent = "";
        document.getElementById("humidity").textContent = "";
        document.getElementById("wind").textContent = "";
        document.getElementById("sunrise").textContent = "";
        document.getElementById("sunset").textContent = "";
        document.getElementById("description").textContent = "";
        document.getElementById("weatherIcon").src = "";
        document.getElementById("forecastContainer").classList.add("hidden");
        return;
      }

      const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
      const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });

      document.getElementById("location").innerHTML = `📍 ${data.name}, ${data.sys.country}`;
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("sunrise").textContent = sunriseTime;
      document.getElementById("sunset").textContent = sunsetTime;

      setBackground(data.weather[0].main);
    });
}



function toggleForecast() {
  const container = document.getElementById("forecastContainer");
  if (!container.classList.contains("hidden")) {
    container.classList.add("hidden");
    return;
  }

  const city = document.getElementById("cityInput").value;
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      container.innerHTML = "";
      for (let i = 0; i < data.list.length; i += 8) {
        const item = data.list[i];
        const date = new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
        container.innerHTML += `
          <div class="forecast-day">
            <p>${date}</p>
            <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="">
            <p>${item.main.temp}°C</p>
            <p>${item.weather[0].main}</p>
          </div>
        `;
      }
      container.classList.remove("hidden");
    });
}

function setBackground(condition) {
  let color = "#ffffff";
  let tip = "🌦 Stay safe out there!";

  switch (condition.toLowerCase()) {
    case "clear":
      color = "#fef9c3";
      tip = "☀️ It's clear outside. Perfect time for a walk!";
      break;
    case "clouds":
      color = "#e0f2fe";
      tip = "☁️ It's cloudy. Great weather to chill with a book.";
      break;
    case "rain":
      color = "#c7d2fe";
      tip = "🌧 Don’t forget your umbrella. It’s raining!";
      break;
    case "snow":
      color = "#e0f7fa";
      tip = "❄️ Bundle up! It’s snowing outside.";
      break;
    case "thunderstorm":
      color = "#b2bec3";
      tip = "⛈ Stay indoors during thunderstorms!";
      break;
    default:
      color = "#f0f9ff";
      tip = "🌈 Be ready for anything today!";
  }

  document.body.style.background = color;
  document.getElementById("weatherTip").textContent = tip;
}

