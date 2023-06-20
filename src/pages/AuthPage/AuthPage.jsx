import RegistrationForm from '../../Components/AuthForm/RegistrationForm/RegistrationForm';
import LogInForm from '../../Components/AuthForm/LoginForm/LoginForm';
import { FormWrapper } from './AuthPage.styled';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <div>
      <FormWrapper>
        {id === 'login' && <LogInForm />}
        {id === 'register' && <RegistrationForm />}
      </FormWrapper>
    </div>
  );
};

export default AuthPage;
