import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperation from '../../../redux/auth/authOperation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import {
  FormRegistration,
  FeedbackFormGroup,
  PasswordWrapper,
  InputForm,
  ToggleShowPasword,
  Btnwrapper,
  BtnRegister,
  StyleErrorMessage,
  Error,
  Link,
} from './RegistrationForm.styled';

import { NavLink } from 'react-router-dom';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).max(20).required(),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required(),
  password: yup.string().min(10).max(20).required(),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperation.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormRegistration>
        <Link>
          <NavLink to="/auth/register" style={{ color: '#ffffff' }}>
            Registration
          </NavLink>
          <NavLink to="/auth/login" style={{ color: '#ffffff4d' }}>
            Log In
          </NavLink>
        </Link>
        <FeedbackFormGroup>
          <InputForm type="text" name="name" placeholder="Enter your name" />
          <StyleErrorMessage name="name">
            {(msg) => <Error>{msg}</Error>}
          </StyleErrorMessage>
        </FeedbackFormGroup>
        <FeedbackFormGroup>
          <InputForm type="email" name="email" placeholder="Enter your email" />
          <StyleErrorMessage name="email">
            {(msg) => <Error>{msg}</Error>}
          </StyleErrorMessage>
        </FeedbackFormGroup>
        <FeedbackFormGroup>
          <PasswordWrapper>
            <InputForm
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Create a password"
            />
            <ToggleShowPasword onClick={togglePasswordVisibility}>
              {showPassword ? (
                <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
              ) : (
                <BsEyeSlash
                  color="#ffffff4d"
                  style={{ width: 18, height: 18 }}
                />
              )}
            </ToggleShowPasword>
          </PasswordWrapper>
          <StyleErrorMessage name="password">
            {(msg) => <Error>{msg}</Error>}
          </StyleErrorMessage>
        </FeedbackFormGroup>
        <Btnwrapper>
          <BtnRegister type="submit">Register Now</BtnRegister>
        </Btnwrapper>
      </FormRegistration>
    </Formik>
  );
};

export default RegistrationForm;
