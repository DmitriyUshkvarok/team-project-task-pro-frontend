import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

//===for calendar===/
import { formattedDateForBtn } from '../../../services/formatingDate.js';
import Calendar from '../Calendar/Calendar.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import '../Calendar/calendar.css';

//===for fetch===/
import { useCreateTaskMutation } from '../../../redux/boardApi/boardApi.js';

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
} from './AddCard.styled.js';

const ModalAddCard = ({ componentName }) => {
  console.log(componentName);
  const { boardId, columnId } = componentName;
  const [date, setDate] = useState(new Date());
  const [select, setSelect] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');

  const [createTask] = useCreateTaskMutation();

  const dispatch = useDispatch();

  const priorityValue = ['low', 'medium', 'high', 'without'];

  //===for change date on the modal===/
  useEffect(() => {
    setFormattedDate(formattedDateForBtn(date));
  }, [date]);

  const initialValues = {
    title: '',
    description: '44444',
    priority: '',
    deadline: date.toISOString(),
    column: columnId,
  };

  const schema = yup.object({
    title: yup.string().required('Title is required').max(30),
    description: yup.string().required('Description is required'),
    priority: yup
      .string()
      .required('Priority is required')
      .oneOf(['low', 'medium', 'high', 'without']),
    deadline: yup.date().required('Deadline is required'),
    column: yup.string().required(),
  });

  //===for props (need for the custom radio btn)===/
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const handleSubmit = async (values) => {
    try {
      await createTask({ values, boardId, columnId });
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  };

  const hendleSubmitCalendar = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <AddCardModal>
      <CloseButton onClick={() => dispatch(closeModal())} />
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
                {priorityValue.map((value) => {
                  return (
                    <label htmlFor={value} key={value}>
                      <input
                        value={value}
                        type="radio"
                        id={value}
                        name="priority"
                        onChange={(event) => {
                          handleSelectChange(event);
                          setFieldValue('priority', event.target.value);
                        }}
                        checked={select === value}
                      />
                      <Span value={value} />
                    </label>
                  );
                })}
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
              <Calendar
                prop={date}
                click={hendleSubmitCalendar}
                setFieldValue={setFieldValue}
              />
              <StyleErrorMessage name="deadline" component="div" />
            </CalendarContainer>
            <ButtonModal buttonName={'Add'} />
          </Form>
        )}
      </Formik>
    </AddCardModal>
  );
};

export default ModalAddCard;

ModalAddCard.propTypes = {
  componentName: PropTypes.shape({
    boardId: PropTypes.string.isRequired,
    columnId: PropTypes.string.isRequired,
  }).isRequired,
};
