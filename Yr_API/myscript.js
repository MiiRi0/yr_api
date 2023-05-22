
//bruk en fetch API i en funktion

function sendRequest(dromtorp_lat, dromtorp_lon) {

    if (dromtorp_lat==-999 || dromtorp_lon==-999){
        dromtorp_lat = parseFloat(document.getElementById("myLat").value);
        dromtorp_lon = parseFloat(document.getElementById("myLon").value);
    }
    
    
    let YrRequestDromtorp = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat='+dromtorp_lat+'&lon='+dromtorp_lon;

    fetch(YrRequestDromtorp)
        .then((response) => response.json())
        .then((data) => showWeather(data));
        //her er koden du forandrer HTML koden din med hjelp as javascript og document.getElementbyid("")
        
     function showWeather(data) {
        let temp_now = data.properties.timeseries[0].data.instant.details.air_temperature;
        document.getElementById("temprature").innerHTML = "tempraturen er "+ temp_now + " grader";

        let CAF_now = data.properties.timeseries[0].data.instant.details.cloud_area_fraction;
        document.getElementById("TotalSkydekke").innerHTML = "Total Skydekke er "+ CAF_now + "%";

        let WindSpeed_now = data.properties.timeseries[0].data.instant.details.wind_speed;
        document.getElementById("Vindhastighet").innerHTML = "Vindhastigheten er "+ WindSpeed_now + " mps";

        let WindDirection_now = data.properties.timeseries[0].data.instant.details.wind_from_direction;;
        document.getElementById("WindDirection").innerHTML = "det blåser fra "+ WindDirection_now + " grader";
    }
}

