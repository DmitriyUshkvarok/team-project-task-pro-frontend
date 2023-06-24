import React from 'react';
import { usePostCommentMutation } from '../../../redux/helpApi/helpApi';

import * as yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import icons from '../../../images/icons/sprite/icons.svg';
import url from '../../../images/icons/sprite/icons.svg';
import {
  CloseButton,
  NeedHelpContainer,
  Title,
  Button,
  Wrapper,
  StyleErrorMessage,
  Error,
  InputComment,
  InputEmail,
} from './NeedHelp.styled';

import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const initialValues = {
  email: '',
  comment: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    }),
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
                name="comment"
                placeholder="Comment"
                component="textarea"
              />

              <StyleErrorMessage name="comment">
                {(msg) => <Error>{msg}</Error>}
              </StyleErrorMessage>
            </Wrapper>

            <Button type="submit">Send</Button>
          </Form>
        </Formik>
      </NeedHelpContainer>
    </>
  );
};
