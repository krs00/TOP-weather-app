import { getFirst5Characters, kelToFahrenheit } from "./convert"

const apiKey = 'd1a5b361927c8fc3e4b58436196b552b' 

export async function getWeatherDataAsync(city) {
   try {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: 'cors' })

   if (!response.ok) {
      const errorCode = response.status;
      throw new Error(`Network response was not ok (Status Code: ${errorCode})`);
   }


   const data = await response.json()
   return data } catch (error) {

      console.error('API call failed:', error)
      const errorCode = extractErrorCode(error.message);

      giveErrorAlert(errorCode) 

   }
}

export function processWeatherData(obj) {
   const { main, wind, weather } = obj;
   const fahrenheitLong = kelToFahrenheit(main.temp).toString()
   const fahrenheit = getFirst5Characters(fahrenheitLong)

   const feelsLikeLong = kelToFahrenheit(main.feels_like).toString()
   const feelsLike = getFirst5Characters(feelsLikeLong)

   const name = obj.name

   return {
      name,
      fahrenheit,
      feelsLike,
      humidity: main.humidity.toString(),
      windSpeed: wind.speed.toString(),
      weatherDesc: weather[0].main,
      weatherDescSub: weather[0].description,
   };
}


function extractErrorCode(errorMessage) {

   const match = errorMessage.match(/Status Code: (\d+)/);
   if (match) {
return match[1];
   }
   return 'Unknown';
}

function giveErrorAlert(errorCode) {
   if (errorCode === '404') {
      alert('Error: City not found!')
   }

   else if (errorCode === 'Unknown') {
      alert('Error: Failed to fetch! Is there a network issue?')
   }

   else if (errorCode === '401') {
      alert('Error: You not even hitting the API bro')
   }
}