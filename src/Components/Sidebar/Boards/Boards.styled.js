import styled from 'styled-components';

export const ListBoard = styled.ul`
  margin-top: 40px;
  height: 130px;
  overflow-y: auto;
`;

export const ItemBoard = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 22px 14px;
  background-color: ${({ isSelected }) =>
    isSelected ? 'rgba(31, 31, 31, 1)' : 'transparent'};
  ::after {
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 0;
    width: 4px;
    content: '';
    background: #bedbb0;
    border-radius: 4px 0px 0px 4px;
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
  }
  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  gap: 6px;
`;

export const IconProject = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  background-color: white;
`;

export const TitleBoard = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const WrapIcons = styled.div`
  display: ${({ isSelected }) => (isSelected ? 'flex' : 'none')};
  gap: 12px;

  color: rgba(255, 255, 255, 0.5);
`;
