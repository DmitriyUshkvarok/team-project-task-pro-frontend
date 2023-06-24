import { Formik } from 'formik';
import * as yup from 'yup';
import CloseButton from '../CloseButton/CloseButton';
import ButtonModal from '../ButtonModal/ButtonModal';
import {
  Container,
  FormTitle,
  FormFieldTitle,
  ErrorMessage,
  Form,
  FieldTitle,
} from './Column.styled';

const Column = ({ columnTitle }) => {
  const handleSubmit = () => {};

  return (
    <>
      <Container>
        <CloseButton />

        <FormTitle>{columnTitle}</FormTitle>

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
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="You need to enter the name of the column"
                required
                placeholder="Title"
              />
              <ErrorMessage name="title" component="p" />
            </FormFieldTitle>
            <ButtonModal buttonName="Add" />
          </Form>
        </Formik>
      </Container>
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

export default Column;
