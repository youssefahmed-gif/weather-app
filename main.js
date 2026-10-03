// let weatherInfo = document.getElementById("weather-info");
// let btnSearch = document.getElementById("btn-search");
// let searchInput = document.getElementById("search-input");
// let country = "germany";

// function fetchWeather(country) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=eae3b612980b7423e2c96a3bd7345618`)

//         .then((response) => response.json())
//         .then((data) => {
//         console.log(data);
//         weatherInfo. innerHTML =`
//         <h2>Weather in ${data.name}</h2>
//         <h1>${data.main.temp} C</h1>
//         <p>${data.weather[0].description}</p>
//         <p>Humidity: ${data.main.humidity} %</p>
//         <p>Wind Speed: ${data.wind.speed} km/h</p>
//     `;
//     });
// }

// btnSearch.addEventListener("click", function () {
//     fetchWeather(searchInput.value);
// });
//===================================================

async function fetchRecipe() {
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london&
        units=metric&appid=eae3b612980b7423e2c96a3bd7345618`
    );

    let result = await response.json();
    console.log(result);

}

fetchRecipe();