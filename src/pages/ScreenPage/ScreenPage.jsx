import { useParams } from 'react-router-dom';
import {
  Board,
  Filter,
  SidebarBoard,
  Title,
  BoxColumns,
  BoxColumnsTitle,
  Subject,
  Icon,
  ListCard,
  Card,
  Btn,
  ContainerColumns,
  BtnAdd,
} from './ScreenPage.styled';

const ScreenPage = ({ closeSidebar }) => {
  const { title } = useParams();

  return (
    <>
      <BtnAdd>Add Columns</BtnAdd>
    </>
  );
};

export default ScreenPage;
