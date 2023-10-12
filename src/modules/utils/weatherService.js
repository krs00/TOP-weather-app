import { getFirst5Characters, kelToFahrenheit } from "./convert"


const apiKey = ''

export async function getWeatherDataAsync(city) {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: 'cors'})
   const data = await response.json()

   return data 
}

export function processWeatherData(obj) {

   const { main, wind, weather } = obj;

   const fahrenheitLong = kelToFahrenheit(main.temp).toString()
   const fahrenheit = getFirst5Characters(fahrenheitLong)

   const feelsLikeLong = kelToFahrenheit(main.feels_like).toString()
   const feelsLike = getFirst5Characters(feelsLikeLong) 

   return {
     fahrenheit,
     feelsLike,
     humidity: main.humidity.toString(),
     windSpeed: wind.speed.toString(),
     weatherDesc: weather[0].main,
     weatherDescSub: weather[0].description,
   };
 }
 
