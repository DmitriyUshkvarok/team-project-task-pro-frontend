import { Formik } from 'formik';
import * as yup from 'yup';
import { useCreateBoardMutation } from '../../../redux/boardApi/boardApi';

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
  Icon,
} from './ModalCreateNewBoard.styled';

const ModalCreateNewBoard = () => {
  const [createBoard] = useCreateBoardMutation();

  const handleSubmit = async (values) => {
    console.log(values);
    await createBoard(values);
  };

  return (
    <>
      <ModalCard>
        <CloseButton />
        <Title>New board</Title>

        <Formik
          initialValues={{
            title: '',
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
                  <FormikField type="radio" value={id} name="iconId" />
                  <Icon width="18" height="18">
                    <use xlinkHref={`${urlIcon}${path}`} />
                  </Icon>
                </label>
              ))}
              <ErrorMessage name="iconId" component="p" />
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
              <ErrorMessage name="backgroundId" component="p" />
            </ImageContainer>

            <Button type="submit">
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              Create
            </Button>
          </FormikForm>
        </Formik>
      </ModalCard>
    </>
  );
};

const schema = yup.object({
  title: yup
    .string()
    .min(2, 'To Short!')
    .max(10, 'To Long!')
    .required('Required!'),
  iconId: yup.string().required('Required!'),
  backgroundId: yup.string().required('Required!'),
});

export default ModalCreateNewBoard;
