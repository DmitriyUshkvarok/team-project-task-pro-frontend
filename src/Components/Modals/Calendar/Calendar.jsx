import { formattedDateForBtn } from '../../../services/formatingDate.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';

const Calendar = (date, onChange) => {
  return (
    <DatePicker
      selected={date}
      minDate={new Date()}
      calendarStartDay={1}
      onChange={onChange}
    />
  );
};

export default Calendar;
