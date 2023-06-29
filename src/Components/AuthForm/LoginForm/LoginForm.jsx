import {
  FormikStyle,
  FormLogin,
  FeedbackFormGroup,
  InputEmail,
  InputPassword,
  BtnWrapper,
  BtnLogIn,
  PasswordWrapper,
  ToggleShowPassword,
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
import { LoaderForButton } from '../../Loader/LoaderForButton/LoaderForButton';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required(),
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces')
    .required(),
});

function LogInForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      await dispatch(authOperation.logIn(values));
      await dispatch(authOperation.refreshCurrentUser(values));
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
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
              <ToggleShowPassword onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
                ) : (
                  <BsEyeSlash
                    color="#ffffff4d"
                    style={{ width: 18, height: 18 }}
                  />
                )}
              </ToggleShowPassword>
            </PasswordWrapper>
            <StyleErrorMessage name="password">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <BtnWrapper>
            <BtnLogIn type="submit">
              {isLoading ? <LoaderForButton /> : 'Log In Now'}
            </BtnLogIn>
          </BtnWrapper>
        </FormLogin>
      </FormikStyle>
    </>
  );
}
export default LogInForm;
