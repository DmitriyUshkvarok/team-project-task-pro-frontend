import { Formik } from 'formik';
import * as yup from 'yup';
import { Form } from 'formik';
import {
  FiltersContainer,
  LabelContainer,
  ModalTitle,
  Container,
  Span,
  Text,
  ImageContainer,
  FormikFieldImage,
} from './Filters.styled';
import CloseButton from '../CloseButton/CloseButton';
import images from '../../image.json';

const Filters = () => {
  // допилить:
  // валидацию чекбоксов
  // каптинки
  // адаптивную верстку мобилка планшет

  const handleSubmit = () => {};
  return (
    <>
      <FiltersContainer>
        <CloseButton />
        <ModalTitle>Filters</ModalTitle>

        <Formik
          initialValues={{
            title: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Text id="my-radio-groupImage">Background</Text>
            <ImageContainer role="group" aria-labelledby="my-radio-groupImage">
              {images.map(({ id, path, value }) => (
                <label key={id}>
                  <FormikFieldImage
                    type="radio"
                    name="image"
                    id={id}
                    value={value}
                    checked
                  />
                  <img src={path} alt="" />
                </label>
              ))}
            </ImageContainer>

            <Container>
              <h4 id="filtersRadioButton">Label color</h4>
              <button>Show all</button>
            </Container>

            <LabelContainer role="group" aria-labelledby="my-radio-group">
              <label>
                <input
                  type="radio"
                  value="without priority"
                  name="filtersRadioButton"
                />
                <Span value="priority" />
                Without priority
              </label>

              <label>
                <input type="radio" value="low" name="filtersRadioButton" />
                <Span value="low" />
                Low
              </label>

              <label>
                <input type="radio" value="medium" name="filtersRadioButton" />
                <Span value="medium" />
                Medium
              </label>

              <label>
                <input type="radio" value="high" name="filtersRadioButton" />
                <Span value="high" />
                High
              </label>
            </LabelContainer>
          </Form>
        </Formik>
      </FiltersContainer>
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

export default Filters;
