import { newWeatherCard } from "./modules/components/weatherCard";
import { getWeatherDataAsync, processWeatherData } from "./modules/utils/weatherService";

const inputField = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', handleInputClick)

inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    handleInputClick();
  }
});


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

  if (cleanVal === "") {
    return 
  }
  const obj = await getWeatherDataAsync(cleanVal)
  if (obj === undefined) {
    return
  }
  else {
    const processedData = processWeatherData(obj)
    newWeatherCard(processedData)
  }
}

function clearInputValue() {
  const searchInput = document.querySelector('#search-input')
  searchInput.value = ''
}
 
function clearCardContainer() {
  const container = document.querySelector('#card-container')
  container.innerHTML = ''
}
