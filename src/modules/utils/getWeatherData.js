const apiKey = ''

const lat = '45.523064'

const lon = '-122.676483'


export async function getWeatherData() { 
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}` , {mode: 'cors'})
   .then(response => {
    console.log(response)  
   })
}