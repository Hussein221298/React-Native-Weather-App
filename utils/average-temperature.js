export default (temperatures) => {
  let sum = temperatures.reduce((sum, temp) => sum + temp.temperature, 0);
  return (sum / 24).toFixed(1);
}