import { Formik } from 'formik';
import * as yup from 'yup';
import { useEditBoardMutation } from '../../../redux/boardApi/boardApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModal } from '../../../redux/modal/modalSlice';
import { LoaderForButton } from '../../Loader/LoaderForButton/LoaderForButton';
import { useGetMiniImgQuery } from '../../../redux/miniImgApi/miniImgApi';

import urlIcon from '../../../images/icons/sprite/icons.svg';
import icons from '../../icons.json';
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
  ImgStyled,
  Icon,
  ImgBox,
} from './ModalEditBoard.styled';

const ModalEditBoard = ({ componentName }) => {
  const { id, title, iconId, backgroundId } = componentName;
  const [editBoard, { isLoading: isEditLoading }] = useEditBoardMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetMiniImgQuery();

  const handleSubmit = async (values) => {
    const { data } = await editBoard({ values, id });
    navigate(`/${data?._id}/${data?.title}`, { replace: true });
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
            iconId: iconId,
            backgroundId: backgroundId.name,
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
                  <FormikField type="radio" name="iconId" value={id} />
                  <Icon width="18" height="18">
                    <use xlinkHref={`${urlIcon}${path}`} />
                  </Icon>
                </label>
              ))}
              <ErrorMessage name="iconId" component="p" />
            </IconContainer>

            <Text id="my-radio-groupImage">Background</Text>
            <ImageContainer role="group" aria-labelledby="my-radio-groupImage">
              <label>
                <FormikFieldImage
                  type="radio"
                  name="backgroundId"
                  value="default"
                />
                <ImgBox>
                  <svg width="16" height="16" stroke="var(--iconImageColor)">
                    <use xlinkHref={`${urlIcon}#icon-image-default`} />
                  </svg>
                </ImgBox>
              </label>
              {data?.map(({ _id, name, image }) => (
                <label key={_id}>
                  <FormikFieldImage
                    type="radio"
                    name="backgroundId"
                    value={name}
                  />
                  <ImgBox>
                    <ImgStyled width={28} src={image.retina} alt={name} />
                  </ImgBox>
                </label>
              ))}
              <ErrorMessage name="backgroundId" component="p" />
            </ImageContainer>

            <Button type="submit" disabled={isEditLoading}>
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              {isEditLoading ? <LoaderForButton /> : 'Edit'}
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
    .min(2, 'Too Short!')
    .max(30, 'Maximum 30 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid name format'
    )
    .required('title is required!'),
  iconId: yup.string(),
  backgroundId: yup.string(),
});

export default ModalEditBoard;
