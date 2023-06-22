import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ModalAddCard = () => {
  const initialValues = {
    title: '',
    description: '',
    labelColor: '',
    deadline: null,
  };

  const schema = yup.object({
    title: yup.string().required('Title is required').max(30),
    description: yup.string().required('Description is required'),
    labelColor: yup.string().required('Label color is required'),
    deadline: yup.date().required('Deadline is required'),
  });

  const handleSubmit = async (values) => {
    alert(JSON.stringify(values, null, 2));

    //***DISPATCH */
    //****** не забути закрити форму після відправки */
  };

  return (
    <>
      <p>Add card</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        autoComplete="off"
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <Field id="title" name="title" type="text" placeholder="Title" />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <Field
                id="description"
                name="description"
                type="text"
                placeholder="Description"
              />
              <ErrorMessage name="description" component="div" />
            </div>

            <div>
              <p id="labelColor">Label color</p>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="labelColor" value="Low" />
                </label>
                <label>
                  <Field type="radio" name="labelColor" value="Medium" />
                </label>
                <label>
                  <Field type="radio" name="labelColor" value="High" />
                </label>
                <label>
                  <Field
                    type="radio"
                    name="labelColor"
                    value="Without priority"
                  />
                </label>
                <ErrorMessage name="labelColor" component="div" />
              </div>
            </div>

            <div>
              <p className="asd"> Deadline</p>
              <DatePicker
                name="deadline"
                onChange={(date) => setFieldValue('deadline', date)}
                disablePast
                views={['month', 'day']}
                // open={true}
                textField={(props) => <TextField {...props} />}
                InputProps={{ sx: { '& .MuiSvgIcon-root': { color: 'blue' } } }}
                // PopperProps={{ sx: popperSx }}
              />
              <ErrorMessage name="deadline" component="div" />
            </div>

            <button type="submit">+Add</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ModalAddCard;
