import { useParams } from 'react-router-dom';
import { useGetFetchBoardByIdQuery } from '../../redux/boardApi/boardApi';
import {
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

const ScreenPage = () => {
  const { boardId } = useParams();
  const { data } = useGetFetchBoardByIdQuery(boardId);

  return (
    <>
      {data?.columns &&
        data.columns.map((column) => (
          <BoxColumns key={column._id}>
            <BoxColumnsTitle>
              <Subject>{column.title}</Subject>
              <Icon>icon</Icon>
              <Icon>icon</Icon>
            </BoxColumnsTitle>

            {/* <ListCard>
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
          </ListCard> */}

            <Btn>Add another card</Btn>
          </BoxColumns>
        ))}

      {/* <BoxColumns>
          <BoxColumnsTitle>
            <Subject>To Do</Subject>
            <Icon>icon</Icon>
            <Icon>icon</Icon>
          </BoxColumnsTitle>

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
          </ListCard>

          <Btn>Add another card</Btn>
        </BoxColumns> */}
      {/* <BtnAdd>Add Columns</BtnAdd> */}
    </>
  );
};

export default ScreenPage;
