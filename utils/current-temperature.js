export default (temperatures) => {
  return temperatures[new Date().getHours()].temperature;
}