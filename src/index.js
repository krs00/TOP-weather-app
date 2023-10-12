import { getWeatherDataAsync } from "./modules/utils/weatherService";
import { kelToFahrenheit } from "./modules/utils/convert";


const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', getInputValue)




// cleans up input from user to feed it into fetch url
function cleanInput(input) {
  const inputStr = String(input)
  const inputLower = inputStr.toLowerCase()
  return inputLower
}


// gets input value from user on btn click
async function getInputValue() {
  const value = document.querySelector('#search-input').value
  const cleanVal = cleanInput(value)

  const obj = await getWeatherDataAsync(cleanVal)

  console.log(obj) 
  
  // get fahrenheit
  const fahrenheit = kelToFahrenheit(obj.main.temp) 
  
  const feelsLike = kelToFahrenheit(obj.main.feels_like)

  const humidity = obj.main.humidity

  const windSpeed = obj.wind.speed

  const weatherDesc = obj.weather[0].main 

  const weatherDescSub = obj.weather[0].description

  console.log(`${fahrenheit}`)
  console.log(`${feelsLike}`)
  console.log(`${humidity}`)
  console.log(`${windSpeed}`)
  console.log(`${weatherDesc}`) 
  console.log(`${weatherDescSub}`)

  clearInputValue()
}


function clearInputValue() {
  const searchInput = document.querySelector('#search-input')
  searchInput.value = ''
}



// getWeatherData('portland')


