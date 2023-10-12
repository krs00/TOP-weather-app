export function kelToFahrenheit(kelvin) {
    // Formula to convert Kelvin to Fahrenheit: (K - 273.15) * 9/5 + 32
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;

    return fahrenheit; 
  }

export function getFirst5Characters(inputString) {

  return inputString.slice(0, 5);
} 
