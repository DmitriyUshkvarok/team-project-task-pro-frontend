import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ prop, click, setFieldValue }) => {
  const handleDateChange = (selectedDate) => {
    click(selectedDate);
    setFieldValue('deadline', selectedDate);
  };

  const date = new Date(prop);

  return (
    <DatePicker
      selected={date}
      minDate={new Date()}
      calendarStartDay={1}
      onChange={handleDateChange}
    />
  );
};

export default Calendar;
