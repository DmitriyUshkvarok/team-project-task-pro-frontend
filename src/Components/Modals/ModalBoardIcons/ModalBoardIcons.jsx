import url from '../../../images/icons/sprite/icons.svg';
import { Text, Form, Field, IconContainer } from './ModalBoardIcons.styled';

const ModalBoardIcons = () => {
  return (
    <>
      <Form>
        <Text id="my-radio-groupIcon">Icons</Text>
        <IconContainer role="group" aria-labelledby="my-radio-groupIcon">
          <label>
            <Field type="radio" name="picked" id="1" value="1" checked />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-1`} />
            </svg>
          </label>
          <label>
            <Field type="radio" name="picked" id="2" value="2" />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-2`} />
            </svg>
          </label>
          <label>
            <Field type="radio" name="picked" id="3" value="3" />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-3`} />
            </svg>
          </label>
          <label>
            <Field type="radio" name="picked" id="4" value="4" />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-4`} />
            </svg>
          </label>
          <label>
            <Field type="radio" name="picked" id="5" value="5" />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-5`} />
            </svg>
          </label>
          <label>
            <Field type="radio" name="picked" id="6" value="6" />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-6`} />
            </svg>
          </label>
          <label>
            <Field type="radio" name="picked" id="7" value="7" />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-7`} />
            </svg>
          </label>
          <label>
            <Field type="radio" name="picked" id="8" value="8" />
            <svg width="18" height="18">
              <use xlinkHref={`${url}#icon-board-8`} />
            </svg>
          </label>
        </IconContainer>
      </Form>

      {/* <Container>
        <Text>Icons</Text>
        <IconContainer>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-1`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-2`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-3`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-4`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-5`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-6`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-7`} />
          </svg>
          <svg width="18" height="18">
            <use xlinkHref={`${url}#icon-board-8`} />
          </svg>
        </IconContainer>
      </Container> */}
    </>
  );
};

export default ModalBoardIcons;
