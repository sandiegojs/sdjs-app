export function getMonthString(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January'
  ];
  const d = new Date(date);
  return months[d.getMonth()];
}

export function getDayOfTheWeek(date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const d = new Date(date);
  return days[d.getDay() + 1];
}

export function getDateString(date) {
  return date.slice(-2);
}

export function getYearString(date) {
  return date.substring(0, 4);
}

export function standardTime(time) {
  let hour = time.substring(0, 2);
  const min = time.slice(-2);
  let amOrPm = ' AM';
  if (hour > 12) {
    hour -= 12;
    amOrPm = ' PM';
  }

  return `${hour}:${min}${amOrPm}`;
}
