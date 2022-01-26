// const axios = require("axios");
const search = document.querySelector(".search-bar");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const des = document.querySelector(".description");
const hum = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const icon = document.querySelector(".icon");

let weather = {
  apiKey: "1df42a3430e721d037382cce480b1530",
  fetchweather: async function (city) {
    try {
      const d = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1df42a3430e721d037382cce480b1530&units=metric`
      );
      return d;
    } catch (e) {
      console.log(e);
    }
  },
};

btn.addEventListener("click", async (e) => {
  // console.log(search.value);
  const res = await weather.fetchweather(search.value);
  const data = res.data;
  h1.innerText = `${data.main.temp}°C`;
  h2.innerText = `Weather in ${data.name}`;
  des.innerText = `${data.weather[0].description}`;
  hum.innerText = `Humidity: ${data.main.humidity}%`;
  wind.innerText = `Wind speed: ${data.wind.speed} km/h`;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
});

// weather.fetchweather(search.value);
