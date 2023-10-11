import { getWeatherData } from "./modules/utils/getWeatherData";


const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', getInputValue)




// cleans up input from user to feed it into fetch url
function cleanInput(input) {
  const inputStr = String(input)
  const inputLower = inputStr.toLowerCase()
  return inputLower
}


// gets input value from user on btn click
function getInputValue() {
  const value = document.querySelector('#search-input').value
  const cleanVal = cleanInput(value)

  const coords = getWeatherData(cleanVal)
 

  clearInputValue() 

  console.log(cleanVal)
  console.log(coords)
}


function clearInputValue() {
  const searchInput = document.querySelector('#search-input')
  searchInput.value = ''
}



// getWeatherData('portland')


