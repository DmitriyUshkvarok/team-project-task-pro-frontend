import { StyleContainer } from './ContainerHeader.styled';
import PropTypes from 'prop-types';

function ContainerHeader({ children }) {
  return <StyleContainer>{children}</StyleContainer>;
}

ContainerHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContainerHeader;
