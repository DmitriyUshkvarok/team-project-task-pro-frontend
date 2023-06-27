import { formattedDateForBtn } from '../../../services/formatingDate.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';

const Calendar = ({ prop, click }) => {
  console.log(prop);
  console.log(click);
  return (
    <DatePicker
      selected={prop}
      minDate={new Date()}
      calendarStartDay={1}
      onChange={(selectedDate) => click(selectedDate)}
    />
  );
};

export default Calendar;
