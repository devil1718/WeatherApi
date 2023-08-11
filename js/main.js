let searchInput = document.querySelector("#search")
let findCity = document.querySelector("#submit")
// to search the city by click on the button
findCity.addEventListener("click",function(){
    getApi(searchInput.value)
})
// to search the city by just keyup on keyboard by city name
searchInput.addEventListener("keyup",function(){
    getApi(searchInput.value)
})
async function getApi(searchInput="cairo"){
    var Http = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5ecce68f2196414ab90165427231008&q=${searchInput}&days=3`,{method:'GET'})
    var myResponse = await Http.json()
    console.log(myResponse);
    displayWeather(myResponse)
    }
    getApi() 

    // const d = new Date();
    // let day = weekday[d.getUTCDay()];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month = ["January","Febrwary","March","April","May","June","July","Augest","September","October","November","December"]
    
    function displayWeather(myResponse){
        var fristDayBox = `         
           <div class="box1 ">
        <div class="card-header d-flex justify-content-between p-2">
          <h6 class="firstDay">${weekday[(new Date(myResponse.forecast.forecastday[0].date)).getDay()]}</h6>
          <h6 class="theDate">${(new Date(myResponse.forecast.forecastday[0].date)).getDate()}  ${month[(new Date(myResponse.forecast.forecastday[0].date)).getMonth()]}</h6>
        </div>
        <div class="forecastContent">
          <h6 class="cityLocation p-2 ms-1">${myResponse.location.name}</h6>
          <div class="degree d-flex">
            <div class="number">
              ${myResponse.current.temp_c}
              <sup>o</sup>
              C
            </div>
            <div class="weatherIcon">
              <img src=${myResponse.current.condition.icon} alt="" />
            </div>
          </div>
          <p class="custom ms-3 mb-5">${myResponse.current.condition.text}</p>
         <div class="icons-weather d-flex align-items-center ">
          <div class="umbrella mx-2 ">
            <i
              class="fa-solid fa-umbrella  my-4"
              style="color: #888b91"
            ></i>
            20%
          </div>
          <div class="wind  mx-2">
            <i
              class="fa-solid fa-wind  my-4"
              style="color: #888b91"
            ></i>
            18km/h
          </div>
          <div class="direction mx-2 ">
            <i
              class="fa-solid fa-location-crosshairs   my-4"
              style="color: #888b91"
            ></i>
            East
          </div>
         </div>
        </div>
      </div>
      <div class="box2 ">
        <div
          class="card-header theDifferent d-flex justify-content-center p-2"
        >
          <h6 class="secondDay">${weekday[(new Date(myResponse.forecast.forecastday[1].date)).getDay()]}</h6>
        </div>
        <div class="forecastContent2">
          <div class="weatherIcon2">
            <img src=${myResponse.forecast.forecastday[1].day.condition.icon} alt="" width="48" />
          </div>
          <div class="number2">
            ${myResponse.forecast.forecastday[1].day.maxtemp_c}
            <sup>o</sup>
            C
          </div>
          <div class="small">
          ${myResponse.forecast.forecastday[1].day.mintemp_c}
            <sup>o</sup>
          </div>
          <div class="customer ms-3 mb-5">${myResponse.forecast.forecastday[1].day.condition.text}</div>
        </div>
      </div>
      <div class="box3 ">
        <div
          class="card-header theDifferent d-flex justify-content-center p-2"
        >
          <h6 class="secondDay">${weekday[(new Date(myResponse.forecast.forecastday[2].date)).getDay()]}</h6>
        </div>
        <div class="forecastContent2">
          <div class="weatherIcon2">
            <img src=${myResponse.forecast.forecastday[2].day.condition.icon} alt="" width="48" />
          </div>
          <div class="number2">
          ${myResponse.forecast.forecastday[2].day.maxtemp_c}
            <sup>o</sup>
            C
          </div>
          <div class="small">
          ${myResponse.forecast.forecastday[2].day.mintemp_c}
            <sup>o</sup>
          </div>
          <div class="customer ms-3 mb-5">${myResponse.forecast.forecastday[2].day.condition.text}</div>
        </div>
      </div>
     
    `
document.getElementById("allBoxs").innerHTML = fristDayBox
    }

           