import { Formik } from 'formik';
import * as yup from 'yup';
import { Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  FiltersContainer,
  LabelContainer,
  ModalTitle,
  Container,
  Span,
  Text,
  ImageContainer,
  FormikFieldImage,
  ShowAll,
} from './Filters.styled';
import CloseButton from '../CloseButton/CloseButton';
import images from '../../image.json';
// import selectFilterValue from '../../../redux/filter/filterSelector';
import { setFilter } from '../../../redux/filter/filterSlice';

const Filters = () => {
  // допилить:
  // валидацию чекбоксов
  // каптинки
  // адаптивную верстку мобилка планшет

  const dispatch = useDispatch();
  // const filter = useSelector(selectFilterValue);
  // const handleSubmit = () => {};
  const onFilterChange = (e) => {
    console.log('e.target.value :>> ', e.target.value);
    dispatch(setFilter(e.target.value));
  };

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
          onSubmit={() => {}}
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
              {/* <ShowAll>Show all</ShowAll> */}
              <ShowAll>
                <input
                  type="radio"
                  value="all"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                  style={{ display: 'none' }}
                />
                <Span value="all" />
                Show all
              </ShowAll>
            </Container>

            <LabelContainer role="group" aria-labelledby="my-radio-group">
              <label>
                <input
                  type="radio"
                  value="without"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
                <Span value="priority" />
                Without priority
              </label>

              <label>
                <input
                  type="radio"
                  value="low"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
                <Span value="low" />
                Low
              </label>

              <label>
                <input
                  type="radio"
                  value="medium"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
                <Span value="medium" />
                Medium
              </label>

              <label>
                <input
                  type="radio"
                  value="high"
                  name="filtersRadioButton"
                  onChange={onFilterChange}
                />
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
