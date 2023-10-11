const apiKey = ''

const lat = '45.523064'

const lon = '-122.676483'





export async function getWeatherData(city) { 
   // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`, {mode: 'cors'})
   const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}}&limit=1&appid=${apiKey}`, {mode: 'cors'})
   const data = await response.json()
   const dataObj = await data[0]

   const h1 = document.querySelector('#name')

   console.log(h1)
   console.log(dataObj) 

   h1.innerText = dataObj.name

   const array = [dataObj.lat, dataObj.lon]

   return array

}

