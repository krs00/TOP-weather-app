export function kelvinToFahrenheit(kelvin) {
    // Formula to convert Kelvin to Fahrenheit: (K - 273.15) * 9/5 + 32
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return fahrenheit;
  }