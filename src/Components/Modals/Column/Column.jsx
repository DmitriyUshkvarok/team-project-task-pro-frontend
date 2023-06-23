import { Formik } from 'formik';
import * as yup from 'yup';
import url from '../../../images/icons/sprite/icons.svg';
import CloseButton from '../CloseButton/CloseButton';
import {
  Container,
  FormTitle,
  FormFieldTitle,
  ErrorMessage,
  Form,
  FieldTitle,
  Button,
  ContainerIcon,
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
            <Button type="submit">
              <ContainerIcon>
                <svg width="14" height="14">
                  <use xlinkHref={`${url}#icon-plus`} />
                </svg>
              </ContainerIcon>
              Add
            </Button>
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
