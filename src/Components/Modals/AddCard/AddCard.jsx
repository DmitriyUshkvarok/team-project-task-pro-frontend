import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { format } from 'date-fns';
import { useCreateTaskMutation } from '../../../redux/tasksApi/tasksApi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';

import {
  AddCardModal,
  Title,
  InputTitle,
  InputDescription,
  StyledPriority,
  StyledLabelDeadline,
  Button,
  StyleErrorMessage,
  Span,
  LabelContainer,
  ButtonDate,
  CalendarContainer,
  LabelDiv,
} from './AddCard.styled';

const ModalAddCard = ({ boardId, columnId }) => {
  const [date, setDate] = useState(new Date());
  const [select, setSelect] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(formattedDateForBtn(date));
  }, [date]);

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formattedDateForBtn = (date) => {
    if (isToday(date)) {
      return 'Today, ' + format(date, 'MMMM dd');
    }
    return format(date, 'MMMM dd');
  };

  const [createTask] = useCreateTaskMutation();

  const initialValues = {
    title: '',
    description: '',
    priority: '',
    deadline: date,
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

  const handleSubmit = async (values, boardId, columnId) => {
    alert(JSON.stringify(values, null, 2));
    try {
      await createTask(values, boardId, columnId);
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
            <LabelDiv>
              <StyledPriority id="priority">Label color</StyledPriority>
              <LabelContainer role="group" aria-labelledby="my-radio-group">
                <label htmlFor="low">
                  <input
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
                  <Span value="low" />
                </label>

                <label>
                  <input
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
                  <Span value="medium" />
                </label>

                <label>
                  <input
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
                  <Span value="high" />
                </label>

                <label>
                  <input
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
                  <Span value="without" />
                </label>
              </LabelContainer>
              <StyleErrorMessage name="priority" component="div" />
            </LabelDiv>
            <StyledLabelDeadline> Deadline</StyledLabelDeadline>
            <CalendarContainer>
              <ButtonDate>{formattedDate}</ButtonDate>

              <DatePicker
                selected={date}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={(selectedDate) => {
                  setFieldValue('deadline', selectedDate);
                  setDate(selectedDate);
                }}
              />
              <StyleErrorMessage name="deadline" component="div" />
            </CalendarContainer>
            <Button type="submit">Add</Button>
          </Form>
        )}
      </Formik>
    </AddCardModal>
  );
};

export default ModalAddCard;
