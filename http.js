// https://api.github.com/users


// Отримати список користувачів з GitHub API Опис:
// Використайте публічне API GitHub для отримання списку користувачів.Зробіть GET - запит
// за адресою https://api.github.com/users та перегляньте отримані дані щодо користувачів.


// const userListEl = document.querySelector(".list-user");
// const URL = "https://api.github.com/users";

// function fetchUser(url) {
//     const data = fetch(url);
//     return data;
// };

// function createUserMapArt(data) {
//   const listMarkUp = data.map((user) => {
//        const listInfo = `<li class="item-user">
//             <img src="${user.avatar_url}"  class="text-user">
//             <p class="text-user">name: ${user.login}</p>
//             <p class="text-user">url: ${user.url}</p>
//            </li>`;
//       return listInfo;
//     });
//     return userListEl.innerHTML = listMarkUp;
// };



// fetchUser(URL)
//     .then((data) =>
//         data.json()
//     )
//     .then((data) =>
//     // console.log(data)
//       createUserMapArt(data)
//     ).catch((error) => 
//         console.log(error)
//     );


// Отримати погоду за допомогою OpenWeatherMap API Опис:
// Використайте публічне API OpenWeatherMap для отримання поточної погоди.
// Зробіть GET - запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
// де { city } - назва міста, а { API_KEY } - ваш ключ API OpenWeatherMap.
// Перегляньте отримані дані щодо погоди.

// const weatherEl = document.querySelector(".weather");
// const input = document.querySelector(".take-city");

// const apiKey = "25a7c18f58b647208eb125059242501";



// input.addEventListener("input", takeInfo);

// function takeInfo() {
//     const city = input.value;
//     const api = `http://api.weatherapi.com/v1/current.json?key={${apiKey}}&q={${city}}`;
//     getWather(api)
//         .then((response) =>
//             response.json()
//         )
//         .then((data) =>
//             // console.log(data)
//             createMarkUp(data)
//         )
// };


// function getWather(api) {
//     const data = fetch(api);
//     return data;
// };


// function createMarkUp(data) {
//     const markUp = data.map((weatherEl) => {
//        const weatherList = `<li class="item-user">
//            <p class="text-user">name: ${weatherEl.tamp_c}</p>
//            <p class="text-user">url: ${weatherEl.tamp_f}</p>
//            <p class="text-user">url: ${weatherEl.country}</p>
//         </li>`;
//         return weatherList;
//     });
//     weatherEl.innerHTML = markUp;
// };




