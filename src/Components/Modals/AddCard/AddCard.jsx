import React, { useState } from 'react';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { Formik, Form } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useCreateTaskMutation } from '../../../redux/tasksApi/tasksApi';

import {
  AddCardModal,
  Title,
  InputTitle,
  InputDescription,
  StyledPriority,
  StyledLabelDeadline,
  RadioBtn,
  Button,
  StyleErrorMessage,
  Item,
  RadioButton,
  RadioButtonLabel,
} from './AddCard.styled';

const ModalAddCard = ({ column }) => {
  const [select, setSelect] = useState(null);

  const today = new Date();

  const [createTask] = useCreateTaskMutation();

  const initialValues = {
    title: '',
    description: '',
    priority: '',
    deadline: '',
    status: 'in progress',
    column: '60c8c6bbf0c9a15f7c41979a',
  };

  const schema = yup.object({
    title: yup.string().required('Title is required').max(30),
    description: yup.string().required('Description is required'),
    priority: yup
      .string()
      .required('Priority is required')
      .oneOf(['low', 'medium', 'high', 'without']),
    deadline: yup.date().required('Deadline is required'),
    status: yup.string().required(),
    column: yup.string().required(),
  });

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const handleSubmit = async (values) => {
    alert(JSON.stringify(values, null, 2));

    try {
      await createTask(values);
    } catch (error) {
      console.log(error);
    }
    // ***DISPATCH на ЗМІНУ */
    // ****** не забути закрити форму після відправки */
  };

  return (
    <AddCardModal>
      {/* <button>close</button> */}
      <Title>Add card</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        autoComplete="off"
      >
        {({ setFieldValue }) => (
          <Form>
            <InputTitle
              id="title"
              name="title"
              type="text"
              placeholder="Title"
            />
            <StyleErrorMessage name="title" component="div" />

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

            <StyledPriority id="priority">Label color</StyledPriority>
            <RadioBtn role="group" aria-labelledby="my-radio-group">
              <Item value="low">
                <RadioButton
                  value="low"
                  type="radio"
                  id="low"
                  name="priority"
                  onChange={(event) => {
                    handleSelectChange(event);
                    setFieldValue('priority', event.target.value);
                  }}
                  checked={select === 'low'}
                />
                <RadioButtonLabel htmlFor="low"></RadioButtonLabel>
              </Item>
              <Item value="medium">
                <RadioButton
                  type="radio"
                  id="medium"
                  name="priority"
                  onChange={(event) => {
                    handleSelectChange(event);
                    setFieldValue('priority', event.target.value);
                  }}
                  checked={select === 'medium'}
                  value="medium"
                />
                <RadioButtonLabel htmlFor="medium"></RadioButtonLabel>
              </Item>
              <Item value="high">
                <RadioButton
                  type="radio"
                  id="high"
                  name="priority"
                  onChange={(event) => {
                    handleSelectChange(event);
                    setFieldValue('priority', event.target.value);
                  }}
                  checked={select === 'high'}
                  value="high"
                />
                <RadioButtonLabel htmlFor="high"></RadioButtonLabel>
              </Item>

              <Item value="without">
                <RadioButton
                  type="radio"
                  id="without"
                  name="priority"
                  onChange={(event) => {
                    handleSelectChange(event);
                    setFieldValue('priority', event.target.value);
                  }}
                  value="without"
                  checked={select === 'without'}
                />
                <RadioButtonLabel htmlFor="without"></RadioButtonLabel>
              </Item>
            </RadioBtn>
            <StyleErrorMessage name="priority" component="div" />

            <StyledLabelDeadline> Deadline</StyledLabelDeadline>
            <DatePicker
              defaultValue={dayjs(today)}
              name="deadline"
              onChange={(date) => setFieldValue('deadline', date)}
              disablePast
              views={['month', 'day']}
              // open={true}

              // PopperProps={{
              //   sx: {
              //     '&.MuiPickersCalendarHeader-labelContainer': {
              //       color: 'red',
              //     },
              //     '&.MuiPickersPopper-root': {
              //       border: '4px solid red',
              //     },
              //     '&.MuiInputBase': {
              //       color: 'red',
              //     },
              //   },
              // }}
              renderInput={(params) => <TextField {...params} />}
            />
            <StyleErrorMessage name="deadline" component="div" />

            <Button type="submit">+Add</Button>
          </Form>
        )}
      </Formik>
    </AddCardModal>
  );
};

export default ModalAddCard;
