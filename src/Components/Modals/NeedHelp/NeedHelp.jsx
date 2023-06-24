import * as yup from 'yup';
import { Formik, Form } from 'formik';
// import icons from '../../../images/icons/sprite/icons.svg';

import {
  CloseButton,
  NeedHelpContainer,
  Title,
  InputEmail,
  InputComment,
  Button,
  Wrapper,
  StyleErrorMessage,
  Error,
} from './NeedHelp.styled';

import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const initialValues = {
  email: '',
  comment: '',
};

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  comment: yup.string().required('Comment is required'),
});

const NeedHelpModal = () => {
   const dispatch = useDispatch();
  return (
    <NeedHelpContainer>
      <CloseButton onClick={() => dispatch(closeModal())}>
        x
        <svg fill="#000">
          <use href="icons#icon-x-close"></use>
        </svg>
      </CloseButton>
      <Title>Need help</Title>
      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
        validationSchema={schema}
        autoComplete="off"
      >
        <Form>
          <Wrapper>
            <InputEmail
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
            />
            <StyleErrorMessage name="email">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </Wrapper>

          <Wrapper>
            <InputComment
              as="textarea"
              id="comment"
              name="comment"
              type="text"
              placeholder="Comment"
            />
            <StyleErrorMessage name="comment">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </Wrapper>

          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    </NeedHelpContainer>
  );
};

export default NeedHelpModal;
