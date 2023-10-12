import { newWeatherCard } from "./modules/components/weatherCard";
import { getWeatherDataAsync, processWeatherData } from "./modules/utils/weatherService";


const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', handleInputClick)




// cleans up input from user to feed it into fetch url
function cleanInput(input) {
  const inputStr = String(input)
  const inputLower = inputStr.toLowerCase()
  return inputLower
}


async function handleInputClick() {
  clearCardContainer() 
  const value = document.querySelector('#search-input').value
  const cleanVal = cleanInput(value)

  const obj = await getWeatherDataAsync(cleanVal)

  const processedData = processWeatherData(obj)

  console.log(processedData)

  newWeatherCard(processedData)
 
  clearInputValue()
}


function clearInputValue() {
  const searchInput = document.querySelector('#search-input')
  searchInput.value = ''
}

function clearCardContainer() {
  const container = document.querySelector('#card-container')
  container.innerHTML = ''
}