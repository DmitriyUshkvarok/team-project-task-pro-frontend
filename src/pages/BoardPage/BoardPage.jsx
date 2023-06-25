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

export const BoardPage = ({ closeSidebar }) => {
  return (
    <Board onClick={closeSidebar}>
      {/*sidebar  */}
      <Sidebar>
        <Title>Project office</Title>
        <Filter> Icon Filters</Filter>
      </Sidebar>

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
