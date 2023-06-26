import {
  FiltersContainer,
  LabelContainer,
  ModalTitle,
  Container,
  Span,
} from './Filters.styled';
import CloseButton from '../CloseButton/CloseButton';
import BackgroundImageMini from '../BackgroundImageMini/BackgroundImageMini';

const Filters = () => {
  return (
    <>
      <FiltersContainer>
        <CloseButton />
        <ModalTitle>Filters</ModalTitle>
        {/* <BackgroundImageMini /> */}

        <Container>
          <p id="filtersRadioButton">Label color</p>
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
      </FiltersContainer>
    </>
  );
};

export default Filters;
