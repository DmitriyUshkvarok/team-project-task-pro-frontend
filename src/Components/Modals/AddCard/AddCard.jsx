import React from 'react';
import { useFormik } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ModalAddCard = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      labelColor: '',
      deadline: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleDateChange = (date) => {
    formik.setFieldValue('deadline', date);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <p>Add card</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>

        <div>
          <p>Label color</p>
          <label>
            <input
              type="radio"
              name="labelColor"
              value="Low"
              checked={formik.values.labelColor === 'Low'}
              onChange={formik.handleChange}
            />
          </label>
          <label>
            <input
              type="radio"
              name="labelColor"
              value="Medium"
              checked={formik.values.labelColor === 'Medium'}
              onChange={formik.handleChange}
            />
          </label>
          <label>
            <input
              type="radio"
              name="labelColor"
              value="High"
              checked={formik.values.labelColor === 'High'}
              onChange={formik.handleChange}
            />
          </label>
          <label>
            <input
              type="radio"
              name="labelColor"
              value="Without priority"
              checked={formik.values.labelColor === 'Without priority'}
              onChange={formik.handleChange}
            />
          </label>
        </div>

        <div>
          <p>Deadline</p>
          <DatePicker
            value={formik.values.deadline}
            onChange={handleDateChange}
            disablePast
          />
        </div>

        <button type="submit">+Add</button>
      </form>
    </>
  );
};

export default ModalAddCard;
