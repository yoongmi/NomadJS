function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7691789f2fbfc9e35200ddba7d51ee06&units=metric`
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector('#wearher span:first-of-type')
        const city = document.querySelector('#wearher span:last-of-type')
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });

}
function onGeoError(){
    alert("Can't finde you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
