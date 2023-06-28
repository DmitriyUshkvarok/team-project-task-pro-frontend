import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ prop, click, setFieldValue }) => {
  const handleDateChange = (selectedDate) => {
    click(selectedDate);
    setFieldValue('deadline', selectedDate);
  };

  return (
    <DatePicker
      selected={prop}
      minDate={new Date()}
      calendarStartDay={1}
      onChange={handleDateChange}
    />
  );
};

export default Calendar;
