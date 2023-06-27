import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

//===for calendar===/
import { formattedDateForBtn } from '../../../services/formatingDate.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';

//===for fetch===/
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from '../../../redux/tasksApi/tasksApi.js';

//===components===/
import CloseButton from '../CloseButton/CloseButton.jsx';
import ButtonModal from '../ButtonModal/ButtonModal.jsx';
import { closeModal } from '../../../redux/modal/modalSlice';

//===styles===/
import {
  AddCardModal,
  Title,
  InputTitle,
  InputDescription,
  StyledPriority,
  StyledLabelDeadline,
  StyleErrorMessage,
  Span,
  LabelContainer,
  ButtonDate,
  CalendarContainer,
  LabelDiv,
  ChevronDown,
  BtnName,
} from './EditCard.styled.js';

const ModalEditCard = ({ title, description, priority, id }) => {
  const [date, setDate] = useState(new Date());
  const [select, setSelect] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');

  //   const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const dispatch = useDispatch();

  //===for change date on the modal===/
  useEffect(() => {
    setFormattedDate(formattedDateForBtn(date));
  }, [date]);

  const initialValues = {
    title: title,
    description: description,
    priority: priority,
    deadline: date,
    // status: 'in progress',
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
    // status: yup.string().required(),
    column: yup.string().required(),
  });

  //===for props (need for the custom radio btn)===/
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const handleSubmit = async (values, boardId, columnId, id) => {
    alert(JSON.stringify(values, null, 2));
    try {
      await updateTask(values, id);
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddCardModal>
      <CloseButton onClick={() => dispatch(closeModal())} />
      <Title>Edit card</Title>
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
              <ButtonDate type="button">
                <BtnName>
                  {formattedDate}
                  <ChevronDown />
                </BtnName>
              </ButtonDate>
              <DatePicker
                selected={date}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={(selectedDate) => {
                  console.log(selectedDate);
                  setFieldValue('deadline', selectedDate);
                  setDate(selectedDate);
                }}
              />
              <StyleErrorMessage name="deadline" component="div" />
            </CalendarContainer>
            <ButtonModal buttonName={'Edit'} />
          </Form>
        )}
      </Formik>
    </AddCardModal>
  );
};

export default ModalEditCard;
