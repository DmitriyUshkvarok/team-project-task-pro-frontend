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
      <ContainerColumns>
        <BoxColumns>
          <BoxColumnsTitle>
            <Subject>To Do</Subject>
            <Icon>icon</Icon>
            <Icon>icon</Icon>
          </BoxColumnsTitle>

          {/* <ListCardScroll> */}

          <ListCard>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            {/* <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card> */}
          </ListCard>

          <Btn>Add another card</Btn>
        </BoxColumns>
        <BoxColumns>
          <BoxColumnsTitle>
            <Subject>To Do</Subject>
            <Icon>icon</Icon>
            <Icon>icon</Icon>
          </BoxColumnsTitle>
          {/* <ListCardScroll> */}

          <ListCard>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
          </ListCard>

          <Btn>Add another card</Btn>
        </BoxColumns>
        <BoxColumns>
          <BoxColumnsTitle>
            <Subject>To Do</Subject>
            <Icon>icon</Icon>
            <Icon>icon</Icon>
          </BoxColumnsTitle>

          {/* <ListCardScroll> */}

          <ListCard>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            {/* <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card>
            <Card>
              <h3>The Watch Spot Design</h3>
              <p>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's essence of sleek aesthetics and modern
                elegance. Your design should be unique, innovative, and
                reflective of the latest trends in watch design.
              </p>
              <div>
                <p>Priority</p>
                <p>12/05/2023</p>
              </div>
            </Card> */}
          </ListCard>

          <Btn>Add another card</Btn>
        </BoxColumns>
        <BtnAdd>Add Columns</BtnAdd>
      </ContainerColumns>
    </Board>
  );
};

export default BoardPage;
