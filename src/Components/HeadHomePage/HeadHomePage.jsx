import url from '../../images/icons/sprite/icons.svg';
import {
  HeadHomeBox,
  HeadTitle,
  HeadBoxFilter,
  ButtonFilter,
  IconFilter,
} from './HeadHomePage.styled';

const HeadHomePage = ({ boardTitle }) => {
  return (
    <HeadHomeBox>
      <HeadTitle>{boardTitle}</HeadTitle>
      <HeadBoxFilter>
        <IconFilter width="16" height="16">
          <use xlinkHref={`${url}#icon-Vector-2`} />
        </IconFilter>
        <ButtonFilter type="button">Filters</ButtonFilter>
      </HeadBoxFilter>
    </HeadHomeBox>
  );
};

export default HeadHomePage;
