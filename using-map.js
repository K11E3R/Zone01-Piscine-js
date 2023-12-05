const citiesOnly = arr => arr.map(item => item.city);

const upperCasingStates = arr => arr.map(item =>
  item.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
);

const fahrenheitToCelsius = arr => arr.map(item =>
  `${Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9))}°C`
);

const trimTemp = arr => arr.map(item => (item.temperature = item.temperature.replaceAll(" ", ""), item));

const tempForecasts = arr => arr.map(item =>
  `${Math.floor((Number(item.temperature.slice(0, -2)) - 32) * (5 / 9))}°Celsius in ${item.city}, ${item.state.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")}`
);
