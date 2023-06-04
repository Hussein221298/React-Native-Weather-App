export default getHourFromDate = (date) => {
  date = new Date(date);
  let hour = date.getHours();
  let ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 === 0 ? 12 : hour % 12;;

  return `${hour} ${ampm}`;
}