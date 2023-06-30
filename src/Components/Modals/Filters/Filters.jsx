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
  ImgStyled,
} from './Filters.styled';
import CloseButton from '../CloseButton/CloseButton';
import images from '../../image.json';
import { setFilter } from '../../../redux/filter/filterSlice';
import { useGetMiniImgQuery } from '../../../redux/miniImgApi/miniImgApi';
import urlIcon from '../../../images/icons/sprite/icons.svg';

const Filters = () => {
  // допилить:
  // валидацию чекбоксов
  // каптинки
  // адаптивную верстку мобилка планшет

  const dispatch = useDispatch();
  const onFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const { data } = useGetMiniImgQuery();

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
                  <ImgStyled width={28} src={image.retina} alt={name} />
                </label>
              ))}
            </ImageContainer>

            <Container>
              <h4 id="filtersRadioButton">Label color</h4>
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
