import {
  FormikStyle,
  FormLogin,
  FeedbackFormGroup,
  InputEmail,
  InputPassword,
  Btnwrapper,
  BtnLogIn,
  PasswordWrapper,
  ToggleShowPasword,
  StyleErrorMessage,
  Error,
  Link,
} from './LoginForm.Styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import authOperation from '../../../redux/auth/authOperation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(10).max(20).required(),
});

function LogInForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperation.logIn(values));
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <FormikStyle
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormLogin>
        <Link>
          <NavLink to="/auth/register" style={{ color: '#ffffff4d' }}>
            Registration
          </NavLink>
          <NavLink to="/auth/login" style={{ color: '#ffffff' }}>
            Log In
          </NavLink>
        </Link>
        <FeedbackFormGroup>
          <InputEmail
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <StyleErrorMessage name="email">
            {(msg) => <Error>{msg}</Error>}
          </StyleErrorMessage>
        </FeedbackFormGroup>
        <FeedbackFormGroup>
          <PasswordWrapper>
            <InputPassword
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Confirm a password"
            />
            <ToggleShowPasword onClick={togglePasswordVisibility}>
              {showPassword ? (
                <BsEyeSlash
                  color="#ffffff4d"
                  style={{ width: 18, height: 18 }}
                />
              ) : (
                <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
              )}
            </ToggleShowPasword>
          </PasswordWrapper>
          <StyleErrorMessage name="password">
            {(msg) => <Error>{msg}</Error>}
          </StyleErrorMessage>
        </FeedbackFormGroup>
        <Btnwrapper>
          <BtnLogIn type="submit">Log In</BtnLogIn>
        </Btnwrapper>
      </FormLogin>
    </FormikStyle>
  );
}
export default LogInForm;
