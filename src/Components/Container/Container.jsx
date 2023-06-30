import { StyleContainer } from './Container.styled';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <StyleContainer>{children}</StyleContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
