import { getWeatherDataAsync, processWeatherData } from "./modules/utils/weatherService";
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

  const processedData = processWeatherData(obj)

  console.log(processedData) 

  clearInputValue()
}


function clearInputValue() {
  const searchInput = document.querySelector('#search-input')
  searchInput.value = ''
}



// getWeatherData('portland')


