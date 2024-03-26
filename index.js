function refresh(response) {
    let temperatureElement=document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement=document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#windSpeed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
  
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = Formatdate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`; 
}
function searchCity(city) {
    let apiKey = "4469fdf259a028ad6t24e3b099ob56d7 ";
    let apiUrl = ' https://api.shecodes.io/weather/v1/forecast?query=Thohoyandou&key=4469fdf259a028ad6t24e3b099ob56d7&units=metric';
    axios.get(apiUrl).then(refresh);
    searchCity("Thohoyandou");
}
function Formatdate(date) {
    let minutes =date.getMinutes();
    let hours = date.gethours();
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday",];
      let day = days[date.getDay()];
    
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    
      return `${day} ${hours}:${minutes}`
}
function SearchSumbit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
  
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", SearchSumbit);




