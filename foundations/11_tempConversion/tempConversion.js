const convertToCelsius = function(fahrenheitTemperature) {
  // fahrenheit - 32 * 5/9
  // round to 1 decimal place
  let celsiusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  return round(celsiusTemperature, 1);
};

const convertToFahrenheit = function(celsiusTemperature) {
  // formula => celsius * (9/5) + 32
  // round to 1 decimal place
  let fahrenheitTemperature = (celsiusTemperature * (9 / 5)) + 32;
  return round(fahrenheitTemperature, 1);
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
