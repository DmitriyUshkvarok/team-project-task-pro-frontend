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
} from './RegistrationForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).max(20).required(),
  email: yup.string().required(),
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
                <BsEyeSlash color="var(--border-color)" />
              ) : (
                <BsEye color="var(--border-color)" />
              )}
            </ToggleShowPasword>
          </PasswordWrapper>
          <StyleErrorMessage name="password">
            {(msg) => <Error>{msg}</Error>}
          </StyleErrorMessage>
        </FeedbackFormGroup>
        <Btnwrapper>
          <BtnRegister type="submit">Registration</BtnRegister>
        </Btnwrapper>
      </FormRegistration>
    </Formik>
  );
};

export default RegistrationForm;
