//on windload start app
window.addEventListener('load', function appStart() {
  
  //collect html elements to be changed
  var locationEle = document.querySelector('.weather-location');
  var tempMinEle = document.querySelector('.weather-info-low');
  var tempHighEle = document.querySelector('.weather-info-high');
  var curentTempEle = document.querySelector('.weather-info-temp');
  var sunUpEle = document.querySelector('.weather-sun-rise-text');
  var sunDownEle = document.querySelector('.weather-sun-set-text');
  var weatherDesc = document.querySelector('.weather-info-text');
  var containerEle = document.querySelector('.wrapper');


  //check if the navigator is supported by browser
  if (navigator.geolocation) {

    //check current position if browser denied use callback function
    navigator.geolocation.getCurrentPosition(getLocal, getcityName);

  } else {
    //browser is not supported
    locationEle.innerHTML = "Geolocation is not supported by this browser.";
  }
  //get long and lat coordinates
  function getLocal(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    //send lat long coordinates to getweather()
    getWeatherData(lat, long);


  }
  // browser has denied geolocation show error will update to use search by city name
  function getcityName(error) {
    containerEle.innerHTML = '<p>You have denied me. frown...</p>'
    console.log("errororororororor");
  }

  function getWeatherData(lat, long) {
    //create the api call string using lat long
    const api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&APPID=3e2d8aefac1e2f03a86df67c599a2623';
    //create httpRequest
    var xhr = new XMLHttpRequest();

    //check if request state has changed
    xhr.onreadystatechange = function () {

      //check for error
      if (this.readyState == 4 && this.status == 200) {
        //parse data into JSON object
        var wData = JSON.parse(this.responseText);

        // call display data function
        displayData(wData);
      }
    }
    // set xhr api get request and send
    xhr.open("GET", api, true);
    xhr.send();
  }

  //displays data from JSON object
  function displayData(wData) {

    locationEle.innerHTML = wData.name + ", " + wData.sys.country;
    tempMinEle.innerHTML = Math.round(wData.main.temp_min) + '&#8451';
    tempHighEle.innerHTML = Math.round(wData.main.temp_max) + '&#8451';
    curentTempEle.innerHTML = Math.round(wData.main.temp) + '&#8451';
    weatherDesc.innerHTML = wData.weather[0].description;
    var sunUpdate = new Date(wData.sys.sunrise * 1000);
    var sunDowndate = new Date(wData.sys.sunset * 1000);



    sunUpEle.innerHTML = sunUpdate.getHours() + ":" + sunUpdate.getMinutes() + " AM";
    //checks if minutes is less than 10 if so adds 0 infront
    if (sunDowndate.getMinutes() < 10) {
      sunDownEle.innerHTML = sunDowndate.getHours() + ":0" + sunDowndate.getMinutes() + " PM";
    } else {
      sunDownEle.innerHTML = sunDowndate.getHours() + ":" + sunDowndate.getMinutes() + " PM";
    }

  }
});