export default (date) => {
  date = new Date(date);

  return date.getHours() > 11 ? `${date.getHours() - 11} pm` : `${date.getHours() + 1} am`;
}