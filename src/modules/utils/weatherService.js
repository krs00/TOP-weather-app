const apiKey = '' 


export async function getWeatherDataAsync(city) {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {mode: 'cors'})
   const data = await response.json()

   return data 
}

