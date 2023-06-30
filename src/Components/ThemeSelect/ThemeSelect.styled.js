import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;

  max-height: ${(props) => (props.isOpen ? '200px' : '0')};
  transition: max-height 0.3s;
`;

export const ThemeSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
export const ThemeTitle = styled.p`
  font-size: var(--fontSize14);
  font-family: var(--poppinsFont);
  font-weight: var(--fontWeight500);
  letter-spacing: -0.28px;
  color: var(--secondaryItemsColor);
  &:hover,
  &:focus {
    color: var(--accentColor);
  }
`;

export const ListThema = styled.ul`
  position: absolute;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transform: translateY(${(props) => (props.isOpen ? '0' : '-10px')});
  transition: opacity 0.1s, transform 0.3s;
  pointer-events: ${(props) => (props.isOpen ? 'visible' : 'none')};

  display: inline-flex;
  padding: 18px 44px 18px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: var(--borderRadius8);
  border: 1px solid var(--accentColor);
  background: var(--themeBgColor);
  box-shadow: 0px 4px 16px 0px var(--themeBoxShadow);

  gap: 8px;
  top: 19px;
  left: 0px;
  z-index: 1000;
`;

export const ItemThema = styled.li`
  cursor: pointer;
  color: var(--primaryItemsColor);
  opacity: 50%;
  transition: color var(--transition);
  &:hover,
  &:focus {
    color: var(--accentColor);
    opacity: 100%;
  }
`;
