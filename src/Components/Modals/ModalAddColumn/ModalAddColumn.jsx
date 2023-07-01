import { Formik } from 'formik';
import * as yup from 'yup';
import { useCreateColumnMutation } from '../../../redux/boardApi/boardApi';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import urlIcon from '../../../images/icons/sprite/icons.svg';
import CloseButton from '../CloseButton/CloseButton';
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
} from './ModalAddColumn.styled';

const ModalAddColumn = ({ componentName }) => {
  const dispatch = useDispatch();
  const [createColumn, { isLoading: isCreteLoading }] =
    useCreateColumnMutation();
  const handleSubmit = async (values) => {
    const { boardId } = componentName;
    await createColumn({ values, boardId });
    dispatch(closeModal());
  };

  return (
    <>
      <ModalContainer>
        <CloseButton />
        <Title>Add column</Title>
        <Formik
          initialValues={{
            title: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
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

            <Button type="submit" disabled={isCreteLoading}>
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              {isCreteLoading ? <LoaderForButton /> : 'Add'}
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

export default ModalAddColumn;
