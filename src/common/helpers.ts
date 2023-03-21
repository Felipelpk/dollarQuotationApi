const days = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  0: 'Sunday',
};

export function isWeekendAndweekendDay(date: Date) {
  const day = date.getDay();
  return {
    isWeekend: day === 6 || day === 0 ? true : false,
    weekendDay: days[day],
  };
}
