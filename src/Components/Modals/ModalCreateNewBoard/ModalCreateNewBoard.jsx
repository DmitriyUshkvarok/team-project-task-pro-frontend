import { Formik } from 'formik';
import * as yup from 'yup';

import CloseButton from '../CloseButton/CloseButton';
import ModalFormTitle from '../ModalFormTitle/ModalFormTitle';
import ModalBoardIcons from '../ModalBoardIcons/ModalBoardIcons';
import BackgroundImageMini from '../BackgroundImageMini/BackgroundImageMini';
import { ModalCard, Title } from './ModalCreateNewBoard.styled';

const ModalCreateNewBoard = () => {
  const handleSubmit = () => {};

  return (
    <>
      <ModalCard>
        <CloseButton />
        <Title>New board</Title>

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
            {children}
            <ButtonModal buttonName={buttonName} />
          </Form>
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

export default ModalCreateNewBoard;
