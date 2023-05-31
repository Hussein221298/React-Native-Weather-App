export default (temperatures) => {
  const currentDate = new Date();
  const currentMinutes = currentDate.getMinutes();
  const currentHour =  currentMinutes > 30 ? (currentDate.getHours() + 1) % 24 : currentDate.getHours();

  return temperatures[currentHour].temperature;
}