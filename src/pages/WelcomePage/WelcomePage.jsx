import { StyleSectionWelcomePage } from './WelcomePage.styled';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <StyleSectionWelcomePage>
      <Link to="/auth/login">Log In</Link>
      <Link to="/auth/register">Register</Link>
    </StyleSectionWelcomePage>
  );
};

export default WelcomePage;
