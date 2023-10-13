export function newWeatherCard(obj) {

    const container = document.querySelector('#card-container')

    // create card body
    const body = document.createElement('div')
    body.id = 'card-body'

    // create text elements

    const name = createText(`${obj.name}`, 'card-name')
    body.appendChild(name)

    // create description box

    const descContainer = document.createElement('div')
    descContainer.classList.add('center') 
    descContainer.id = 'desc-container'
 
    body.appendChild(descContainer)

    // finish text elements 

    const fahrenheit = createText(`${obj.fahrenheit} °F`, 'card-fahrenheit')
    body.appendChild(fahrenheit)

    const feelsLike = createText(`feels like: ${obj.feelsLike} °F`, 'card-feels-like')
    body.appendChild(feelsLike)

    const humidity = createText(`humidity: ${obj.humidity}%`, 'card-humidity')
    body.appendChild(humidity)

    const windSpeed = createText(`Wind: ${obj.windSpeed} km/h`, 'card-wind')
    body.appendChild(windSpeed)

    // descriptions in the get appended to container

    const weatherDesc = createText(`${obj.weatherDesc} ◔̯`, 'card-weather-desc')
    descContainer.appendChild(weatherDesc)

    const weatherDescSub = createText(`${obj.weatherDescSub}`, 'card-weather-desc-sub')
    descContainer.appendChild(weatherDescSub)


    container.appendChild(body)
    body.classList.add('fade-in')
}

function createText(innerText, id) {
    const textElement = document.createElement('p')
    textElement.classList.add('card-text')
    textElement.id = id
    textElement.innerText = innerText

    return textElement

}