function isValid(date) {
  return !isNaN(date.getTime());
}

function isAfter(date1, date2) {
  return date1.getTime() > date2.getTime();
}

function isBefore(date1, date2) {
  return date1.getTime() < date2.getTime();
}

function isFuture(date) {
  const now = new Date();
  return isValid(date) && isAfter(date, now);
}

function isPast(date) {
  const now = new Date();
  return isValid(date) && isBefore(date, now);
}
