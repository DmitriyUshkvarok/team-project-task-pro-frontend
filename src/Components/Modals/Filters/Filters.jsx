import { LabelContainer, Label, Input, Fake, Text } from './Filters.styled';

const Filters = () => {
  return (
    <>
      <div>
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
        <p>Show all</p>

        <LabelContainer>
          <Label>
            <Input
              type="radio"
              value="Without priority"
              name="Without priority"
            />
            <Fake />
            <Text>Without priority</Text>
          </Label>
          <Label>
            <Fake />
            <Input type="radio" value="Low" name="Low" />
            <Text>Low</Text>
          </Label>
          <Label>
            <Input type="radio" value="Medium" name="Medium" />
            <Fake />
            <Text>Medium</Text>
          </Label>
          <Label>
            <Input type="radio" value="High" name="High" />
            <Fake />
            <Text>High</Text>
          </Label>
        </LabelContainer>
      </div>
    </>
  );
};

export default Filters;
