export default function serializeHourlyData(apiResponse) {
  let { hourly } = apiResponse;

  let hourlyWeather = hourly.temperature_2m.map((temp, i) => (      {
    temperature: temp,
    isDay: hourly.is_day[i],
    date: hourly.time[i],
    weatherCode:hourly.weathercode[i]
  }));

  // returns an array with 9 elements, each element contains an array with 24 elements,
  // each element contains an object with the temperature info of the hour.
  let dailyHourlyWeather = hourlyWeather.reduce((result, hourlyWeather, index) => {
    const dayIndex = Math.floor(index / 24);
    if (!result[dayIndex]) {
      result[dayIndex] = [];
    }
    result[dayIndex] = [ ...result[dayIndex], hourlyWeather];
    return result;
  }, []);

  return {
    hourlyWeather: dailyHourlyWeather
  }
}