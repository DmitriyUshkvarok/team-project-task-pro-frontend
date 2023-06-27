import { Formik } from 'formik';
import * as yup from 'yup';
import { useEditBoardMutation } from '../../../redux/boardApi/boardApi';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';

import urlIcon from '../../../images/icons/sprite/icons.svg';
import icons from '../../icons.json';

import images from '../../image.json';

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
  Button,
  ContainerIconButton,
} from './ModalEditBoard.styled';

const ModalEditBoard = ({ componentName }) => {
  const { id, title } = componentName;
  const [editBoard] = useEditBoardMutation();
  const dispatch = useDispatch();

  // допилить :
  // валидацию радиобатонов
  // перелом  мобильный и планшет дисплей
  // черный цвет иконки когда она активна
  // мини картинки

  const handleSubmit = async (values) => {
    await editBoard({ values, id });
    dispatch(closeModal());
  };

  return (
    <>
      <ModalCard>
        <CloseButton />
        <Title>Edit board</Title>

        <Formik
          initialValues={{
            title: title,
            iconId: '',
            backgroundId: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormikForm>
            <FormFieldTitle>
              <FieldTitle
                type="text"
                name="title"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="You need to enter the name of the column"
                required
                placeholder="Title"
              />
              <ErrorMessage name="title" component="p" />
            </FormFieldTitle>

            <Text id="my-radio-groupIcon">Icons</Text>
            <IconContainer role="group" aria-labelledby="my-radio-groupIcon">
              {icons.map(({ id, path }) => (
                <label key={id}>
                  <FormikField type="radio" name="iconId" value={id} />
                  <svg width="18" height="18">
                    <use xlinkHref={`${urlIcon}${path}`} />
                  </svg>
                </label>
              ))}
            </IconContainer>

            <Text id="my-radio-groupImage">Background</Text>
            <ImageContainer role="group" aria-labelledby="my-radio-groupImage">
              {images.map(({ id, path, value }) => (
                <label key={id}>
                  <FormikFieldImage
                    type="radio"
                    name="backgroundId"
                    value={value}
                  />
                  <img src={path} alt="" />
                </label>
              ))}
            </ImageContainer>

            <Button type="submit">
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              Edit
            </Button>
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

export default ModalEditBoard;
