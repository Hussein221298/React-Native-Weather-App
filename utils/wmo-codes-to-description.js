const WMO_MAP = {
  '0': {
    description: "Clear Sky"
  }, '1': {
    description: "Mainly Clear"
  }, '2': {
    description: "Partly Cloudy"
  }, '3': {
    description: "Overcast"
  }, '45': {
    description: "Fog"
  }, '48': {
    description: "Depositing Rime Fog"
  }, '51': {
    description: "Light Drizzle"
  }, '53': {
    description: "Moderate Drizzle"
  }, '55': {
    description: "Intensity Drizzle"
  }, '56': {
    description: "Light Freezing Drizzle"
  }, '57': {
    description: "Dense Intensity Freezing Drizzle"
  }, '61': {
    description: "Slight Rain"
  }, '63': {
    description: "Moderate Rain"
  }, '65': {
    description: "Heavy Intensity Rain"
  }, '66': {
    description: "Light Freezing Rain"
  }, '67': {
    description: "Heavy Intensity Freezing Rain"
  }, '71': {
    description: "Slight Snow Fall"
  }, '73': {
    description: "Moderate Snow Fall"
  }, '75': {
    description: "Heavy Intensity Snow Fall"
  }, '77': {
    description: "Snow Grains"
  }, '80': {
    description: "Slight Rain Showers"
  }, '81': {
    description: "Moderate Rain Showers"
  }, '82': {
    description: "Violent Rain Showers"
  }, '85': {
    description: "Slight Snow showers"
  }, '86': {
    description: "Heavy  Snow showers"
  }, '95': {
    description: "Thunderstorm"
  }, '96': {
    description: "Thunderstorm with slight hail"
  }, '99': {
    description: "Thunderstorm with heavy hail"
  }
};

export default (code) => {
  return WMO_MAP[code] ? WMO_MAP[code].description : '---';
}