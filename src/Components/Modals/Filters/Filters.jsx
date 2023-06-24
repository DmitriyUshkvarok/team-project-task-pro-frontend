import { FiltersContainer, LabelContainer } from './Filters.styled';

const Filters = () => {
  return (
    <>
      <FiltersContainer>
        <p>Filters</p>
        <p>Background</p>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <p>Label color</p>
        <a href="#">Show all</a>

        <LabelContainer>
          <label>
            <input
              type="radio"
              value="Without priority"
              name="FiltersRadioButton"
            />
            Without priority
          </label>
          <label>
            <input type="radio" value="Low" name="FiltersRadioButton" />
            Low
          </label>
          <label>
            <input type="radio" value="Medium" name="FiltersRadioButton" />
            Medium
          </label>
          <label>
            <input type="radio" value="High" name="FiltersRadioButton" />
            High
          </label>
        </LabelContainer>
      </FiltersContainer>
    </>
  );
};

export default Filters;
