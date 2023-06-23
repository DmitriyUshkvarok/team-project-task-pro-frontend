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

export const NeedHelpModal = ({ handleClose }) => {
  const [postComment, { isLoading, error }] = usePostCommentMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await postComment(values);
      console.log(values);
      resetForm();
      handleClose();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <NeedHelpContainer>
        <CloseButton onClick={handleClose}>
          X
          <svg width="20" height="20" fill="#ffffff">
            <use href={`${url}#icon-x-close`} />
          </svg>
        </CloseButton>
        <Title>Need help</Title>
        <Formik
          initialValues={{ email: '', comment: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Wrapper>
              <InputEmail type="email" name="email" placeholder="Email" />
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
