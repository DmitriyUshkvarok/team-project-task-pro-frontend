import { StyleContainer } from './ContainerBody.styled';
import PropTypes from 'prop-types';

function ContainerBody({ children }) {
  return <StyleContainer>{children}</StyleContainer>;
}

ContainerBody.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContainerBody;
