import { StyleContainer } from './ContainerSidebar.styled';
import PropTypes from 'prop-types';

function ContainerSidebar({ children }) {
  return <StyleContainer>{children}</StyleContainer>;
}

ContainerSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContainerSidebar;
