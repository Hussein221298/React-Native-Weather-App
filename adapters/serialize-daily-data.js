export default function serializeDailyData(apiResponse) {
  let { daily, ...rest } = apiResponse;

  let metaInfo = {
    temperatureUnit: rest.daily_units.temperature_2m_max,
    longitude: rest.longitude,
    latitude: rest.latitude,
  }

  let dailyWeather = [];
  for (let i = 0; i< daily.temperature_2m_min.length; i++) {
    dailyWeather = [ 
      ...dailyWeather,
      {
        minTemp: daily.temperature_2m_min[i],
        maxTemp: daily.temperature_2m_max[i],
        date: daily.time[i],
        weatherCode:daily.weathercode[i],
      }
    ];
  }

  return {
    metaInfo,
    dailyWeather,
  }
}