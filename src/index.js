import { getWeatherDataAsync } from "./modules/utils/weatherService";
import { kToF } from "./modules/utils/converters";


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
  const fahrenheit = kToF(obj.main.temp) 
  
  const feelsLike = kToF(obj.main.feels_like)

  const humidity = obj.main.humidity

  console.log(`${fahrenheit}`)
  console.log(`${feelsLike}`)
  console.log(`${humidity}`)
  console.log(`${humidity}`) 

  // // get feels like
  // const feelsLike = kToF(obj.main.feels_like)
  // const fahrenheitRounded = Math.round(kToF(obj.main.temp))


 

  clearInputValue()
}


function clearInputValue() {
  const searchInput = document.querySelector('#search-input')
  searchInput.value = ''
}



// getWeatherData('portland')


