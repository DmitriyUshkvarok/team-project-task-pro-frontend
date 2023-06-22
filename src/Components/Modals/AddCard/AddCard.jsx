import React from 'react';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import {
  AddCardModal,
  Title,
  InputTitle,
  InputDescription,
  StyledLabel,
  RadioBtn,
  Button,
  StyleErrorMessage,
} from './AddCard.styled';

const ModalAddCard = () => {
  const today = new Date();

  const initialValues = {
    title: '',
    description: '',
    labelColor: '',
    deadline: today,
  };

  const schema = yup.object({
    title: yup.string().required('Title is required').max(30),
    description: yup.string().required('Description is required'),
    labelColor: yup.string().required('Label color is required'),
    deadline: yup.date().required('Deadline is required'),
  });

  const handleSubmit = async (values) => {
    alert(JSON.stringify(values, null, 2));
    // ***DISPATCH */
    // ****** не забути закрити форму після відправки */
  };

  return (
    <AddCardModal>
      <Title>Add card</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        autoComplete="off"
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <InputTitle
                id="title"
                name="title"
                type="text"
                placeholder="Title"
              />
              <StyleErrorMessage name="title" component="div" />
            </div>

            <div>
              <InputDescription
                as="textarea"
                id="description"
                name="description"
                type="text"
                onChange={(event) =>
                  setFieldValue('description', event.target.value)
                }
                placeholder="Description"
              />
              <StyleErrorMessage name="description" component="div" />
            </div>

            <div>
              <StyledLabel id="labelColor">Label color</StyledLabel>
              <RadioBtn role="group" aria-labelledby="my-radio-group">
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
                <StyleErrorMessage name="labelColor" component="div" />
              </RadioBtn>
            </div>

            <div>
              <StyledLabel> Deadline</StyledLabel>
              <DatePicker
                defaultValue={dayjs(today)}
                name="deadline"
                onChange={(date) => setFieldValue('deadline', date)}
                disablePast
                views={['month', 'day']}
                // open={true}

                PopperProps={{
                  sx: {
                    '&.MuiPickersCalendarHeader-labelContainer': {
                      color: 'red',
                    },
                    '&.MuiPickersPopper-root': {
                      border: '4px solid red',
                    },
                    '&.MuiInputBase': {
                      color: 'red',
                    },
                  },
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <StyleErrorMessage name="deadline" component="div" />
            </div>

            <Button type="submit">+Add</Button>
          </Form>
        )}
      </Formik>
    </AddCardModal>
  );
};

export default ModalAddCard;
