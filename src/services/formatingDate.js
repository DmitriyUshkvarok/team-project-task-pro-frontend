import { format } from 'date-fns';

const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const formattedDateForBtn = (date) => {
  if (isToday(date)) {
    return 'Today, ' + format(date, 'MMMM dd');
  }
  return format(date, 'MMMM dd');
};
