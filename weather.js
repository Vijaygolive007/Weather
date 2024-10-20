const input=document.getElementById('input');
const btn=document.getElementById('search');
const container=document.getElementById('container')
const temp=document.getElementById('degrees');
const cloud=document.getElementById('sky');
const image=document.querySelector('.img')
const humidity=document.querySelector('.humidity-per');
const wind=document.getElementById('wind-speed');
const tempCon=document.getElementById('hum-con');
const airPressure=document.getElementById('air-con');
const airpre=document.querySelector('.air-pre')
const imgCon=document.querySelector('.img-con');
const windDeg=document.getElementById('w-deg');

async function checkWeather(city){
    const apiKey=`d3b87b4a97e02065135d6bc338764c1d`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const weather_data=await fetch(url).then(response=>response.json())
    console.log(weather_data);
    if(weather_data.cod=="404"){
        alert("City not Found");
    }
    else{
        temp.innerHTML= `${parseInt(weather_data.main.temp-273.15)+"ºC"}`
        cloud.innerHTML=`${weather_data.weather[0].main}`
        humidity.innerHTML=`${weather_data.main.humidity+"%"}`
        wind.innerHTML=`${weather_data.wind.speed+"Km/H"}`
        airpre.innerHTML=`${weather_data.main.pressure}hPa`
        windDeg.innerHTML=`${weather_data.wind.deg}`
        tempCon.style.visibility='visible';
        container.style.height="100%"
        airPressure.style.visibility='visible';
        imgCon.style.visibility='visible';
        switch (weather_data.weather[0].main) {
            case 'Haze':
                image.src="./asserts/haze.webp"
                break;
            case 'Clouds':
                image.src="./asserts/clouds.png"
                break;
            case 'Mist':
                image.src="./asserts/mist.webp"
                break;
            case 'Rain':
                image.src="./asserts/rain.png"
                break;
            case 'Clear':
                image.src="./asserts/clearimg.png"
                break;
            case 'Thunderstorm':
                image.src="./asserts/thunderstorm.jpeg"
                break;
            case 'Snow':
                image.src="./asserts/snow.png"
                break;
            default:
                break;
    }
    }
    
    
    

}

btn.addEventListener('click',()=>{
    checkWeather(input.value)

})
input.addEventListener('keypress',event=>{
    if (event.key==="Enter"){
        checkWeather(input.value)
    }
})