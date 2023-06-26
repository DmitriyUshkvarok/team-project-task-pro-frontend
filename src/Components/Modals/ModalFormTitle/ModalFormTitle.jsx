import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonModal from '../ButtonModal/ButtonModal';
import {
  Form,
  FormFieldTitle,
  FieldTitle,
  ErrorMessage,
} from './ModalFormTitle.styled';

const ModalFormTitle = ({ children, buttonName }) => {
  const handleSubmit = () => {};

  return (
    <>
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
              title="You need to enter the name of the column"
              required
              placeholder="Title"
            />
            <ErrorMessage name="title" component="p" />
          </FormFieldTitle>
          {children}
          <ButtonModal buttonName={buttonName} />
        </Form>
      </Formik>
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

export default ModalFormTitle;
