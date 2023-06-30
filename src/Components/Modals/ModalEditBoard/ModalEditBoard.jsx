import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useEditBoardMutation } from '../../../redux/boardApi/boardApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModal } from '../../../redux/modal/modalSlice';
import { LoaderForButton } from '../../Loader/LoaderForButton/LoaderForButton';
import { useGetMiniImgQuery } from '../../../redux/miniImgApi/miniImgApi';

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
  const { id, title, iconId } = componentName;
  const [editBoard, { isLoading: isEditLoading }] = useEditBoardMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetMiniImgQuery();
  console.log(data);

  const handleSubmit = async (values) => {
    console.log(values);
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
                  <FormikField type="radio" name="iconId" value={id} />
                  <svg width="18" height="18">
                    <use xlinkHref={`${urlIcon}${path}`} />
                  </svg>
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
                <svg width="16" height="16">
                  <use xlinkHref={`${urlIcon}#icon-image-default`} />
                </svg>
              </label>
              {data?.map(({ _id, name, image }) => (
                <label key={_id}>
                  <FormikFieldImage
                    type="radio"
                    name="backgroundId"
                    value={name}
                  />
                  <img width={28} src={image.regular} alt={name} />
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
    .min(2, 'To Short!')
    .max(10, 'To Long!')
    .required('Required!'),
  iconId: yup.string(),
  backgroundId: yup.string(),
});

export default ModalEditBoard;
