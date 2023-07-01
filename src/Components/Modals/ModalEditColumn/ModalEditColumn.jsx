import { Formik } from 'formik';
import * as yup from 'yup';
import urlIcon from '../../../images/icons/sprite/icons.svg';
import CloseButton from '../CloseButton/CloseButton';
import { useEditColumnMutation } from '../../../redux/boardApi/boardApi';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { LoaderForButton } from '../../Loader/LoaderForButton/LoaderForButton';
import {
  Form,
  FormFieldTitle,
  FieldTitle,
  ErrorMessage,
  ModalContainer,
  Title,
  Button,
  ContainerIconButton,
} from './ModalEditColumn.styled';

const ModalEditColumn = ({ componentName }) => {
  const dispatch = useDispatch();
  const { id, title } = componentName;
  const [editColumn, { isLoading: isEditLoading }] = useEditColumnMutation();

  const handleSubmit = async (values) => {
    await editColumn({ values, id });
    dispatch(closeModal());
  };

  return (
    <>
      <ModalContainer>
        <CloseButton />
        <Title>Edit column</Title>
        <Formik
          initialValues={{
            title: title,
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
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

            <Button type="submit" disabled={isEditLoading}>
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              {isEditLoading ? <LoaderForButton /> : 'Edit'}
            </Button>
          </Form>
        </Formik>
      </ModalContainer>
    </>
  );
};

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Too Short!')
    .max(30, 'Maximum 30 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid name format'
    )
    .required('Required!'),
});

export default ModalEditColumn;
