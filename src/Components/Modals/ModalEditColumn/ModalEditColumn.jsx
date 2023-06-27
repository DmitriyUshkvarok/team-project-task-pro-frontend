import { Formik } from 'formik';
import * as yup from 'yup';
import urlIcon from '../../../images/icons/sprite/icons.svg';
import CloseButton from '../CloseButton/CloseButton';
import { useEditColumnMutation } from '../../../redux/boardApi/boardApi';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
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
  const [editColumn] = useEditColumnMutation();

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
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="You need to enter the name of the column"
                required
                placeholder="Title"
              />
              <ErrorMessage name="title" component="p" />
            </FormFieldTitle>

            <Button type="submit">
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              Add
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
    .min(2, 'To Short!')
    .max(10, 'To Long!')
    .required('Required!'),
});

export default ModalEditColumn;
