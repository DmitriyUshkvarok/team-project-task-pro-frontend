import { useLocation } from 'react-router-dom';
import {
  Board,
  Filter,
  Sidebar,
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
} from './BoardPage.styled';

const BoardPage = ({ closeSidebar }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  return (
    <Board style={{ height: '100vh' }} onClick={closeSidebar}>
      <Sidebar>
        <Title>{title}</Title>
        <Filter> Icon Filters</Filter>
      </Sidebar>
      <BtnAdd>Add Columns</BtnAdd>
    </Board>
  );
};

export default BoardPage;
