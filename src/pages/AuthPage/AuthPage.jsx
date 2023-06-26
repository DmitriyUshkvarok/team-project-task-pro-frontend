import RegistrationForm from '../../Components/AuthForm/RegistrationForm/RegistrationForm';
import LogInForm from '../../Components/AuthForm/LoginForm/LoginForm';
import { AuthSection, FormWrapper } from './AuthPage.styled';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <AuthSection>
      <FormWrapper>
        {id === 'login' && <LogInForm />}
        {id === 'register' && <RegistrationForm />}
      </FormWrapper>
    </AuthSection>
  );
};

export default AuthPage;
