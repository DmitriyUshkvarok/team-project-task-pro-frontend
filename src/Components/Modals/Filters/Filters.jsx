import { Formik } from 'formik';
import * as yup from 'yup';
import { Form } from 'formik';
import { useDispatch} from 'react-redux';
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
import { setFilter } from '../../../redux/filter/filterSlice';
import { useGetMiniImgQuery } from '../../../redux/miniImgApi/miniImgApi';
import urlIcon from '../../../images/icons/sprite/icons.svg';
import { useEditBoardMutation } from '../../../redux/boardApi/boardApi';

const Filters = ({ componentName }) => {
  const dispatch = useDispatch();
  const onFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const { data } = useGetMiniImgQuery();
  const [editBoard] = useEditBoardMutation();

  const updateBackground = async (name) => {
    const { data } = await editBoard({
      values: { backgroundId: name },
      id: componentName.boardId,
    });
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
              <label>
                <FormikFieldImage
                  type="radio"
                  name="backgroundId"
                  value="default"
                  onChange={() => updateBackground('default')}
                />
                <svg width="16" height="16" stroke="var(--iconImageColor)">
                  <use xlinkHref={`${urlIcon}#icon-image-default`} />
                </svg>
              </label>
              {data?.map(({ _id, name, image }) => (
                <label key={_id}>
                  <FormikFieldImage
                    type="radio"
                    name="backgroundId"
                    value={name}
                    onChange={() => updateBackground(name)}
                  />
                  <ImgStyled width={28} src={image.retina} alt={name} />
                </label>
              ))}
            </ImageContainer>

            <Container>
              <Text id="filtersRadioButton">Label color</Text>
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
