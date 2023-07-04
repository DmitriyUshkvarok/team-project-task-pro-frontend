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
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LoaderForButton } from '../../Loader/LoaderForButton/LoaderForButton';
import { useLoginMutation } from '../../../redux/auth/authApi/authApiOperation';
import { toast } from 'react-toastify';

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
  const [loginMutation] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const response = await loginMutation(values);

      if (response.error) {
        if (response.error.status === 401) {
          toast.error(response.error.data.message);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
    resetForm();
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
                  <BsEyeSlash
                    color="#ffffff4d"
                    style={{ width: 18, height: 18 }}
                  />
                ) : (
                  <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
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
