import { Formik } from 'formik';
import * as yup from 'yup';

import url from '../../../images/icons/sprite/icons.svg';

import CloseButton from '../CloseButton/CloseButton';
import {
  ModalCard,
  Title,
  ErrorMessage,
  FormikForm,
  FormFieldTitle,
  FieldTitle,
  Text,
  IconContainer,
  ImageContainer,
  FormikField,
  FormikFieldImage,
} from './ModalCreateNewBoard.styled';

const ModalCreateNewBoard = () => {
  const handleSubmit = () => {};

  return (
    <>
      <ModalCard>
        <CloseButton />
        <Title>New board</Title>

        <Formik
          initialValues={{
            title: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormikForm>
            <FormFieldTitle>
              <FieldTitle
                type="text"
                name="title"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="You need to enter the name of the column"
                required
                placeholder="Title"
              />
              <ErrorMessage name="title" component="p" />
            </FormFieldTitle>

            <Text id="my-radio-groupIcon">Icons</Text>
            <IconContainer role="group" aria-labelledby="my-radio-groupIcon">
              <label>
                <FormikField
                  type="radio"
                  name="picked"
                  id="1"
                  value="1"
                  checked
                />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-1`} />
                </svg>
              </label>
              <label>
                <FormikField type="radio" name="picked" id="2" value="2" />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-2`} />
                </svg>
              </label>
              <label>
                <FormikField type="radio" name="picked" id="3" value="3" />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-3`} />
                </svg>
              </label>
              <label>
                <FormikField type="radio" name="picked" id="4" value="4" />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-4`} />
                </svg>
              </label>
              <label>
                <FormikField type="radio" name="picked" id="5" value="5" />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-5`} />
                </svg>
              </label>
              <label>
                <FormikField type="radio" name="picked" id="6" value="6" />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-6`} />
                </svg>
              </label>
              <label>
                <FormikField type="radio" name="picked" id="7" value="7" />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-7`} />
                </svg>
              </label>
              <label>
                <FormikField type="radio" name="picked" id="8" value="8" />
                <svg width="18" height="18">
                  <use xlinkHref={`${url}#icon-board-8`} />
                </svg>
              </label>
            </IconContainer>

            <Text id="my-radio-groupImage">Background</Text>
            <ImageContainer role="group" aria-labelledby="my-radio-groupImage">
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-1"
                  value="Image-1"
                  checked
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-2"
                  value="Image-2"
                />
                <img src="" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-3"
                  value="Image-3"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-4"
                  value="Image-4"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-5"
                  value="Image-5"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-6"
                  value="Image-6"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-7"
                  value="Image-7"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-8"
                  value="Image-8"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-9"
                  value="Image-9"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-10"
                  value="Image-10"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-11"
                  value="Image-11"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-12"
                  value="Image-12"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-13"
                  value="Image-13"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-14"
                  value="Image-14"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-15"
                  value="Image-15"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
              <label>
                <FormikFieldImage
                  type="radio"
                  name="picked"
                  id="Image-16"
                  value="Image-16"
                />
                <img src="#" alt="miniBackGroundImage" />
              </label>
            </ImageContainer>

            <ButtonModal>Create</ButtonModal>
          </FormikForm>
        </Formik>
      </ModalCard>
    </>
  );
};

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'To Short!')
    .max(10, 'To Long!')
    .required('Required!'),
});

export default ModalCreateNewBoard;
