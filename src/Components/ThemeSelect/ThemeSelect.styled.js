import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
`;

export const ThemeSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
export const ThemeTitle = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const ListThema = styled.ul`
  position: absolute;
  border: 1px solid black;
  display: inline-flex;
  padding: 18px 44px 18px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #151515;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  color: white;
  gap: 8px;
  top: 19px;
  left: 400px;
  width: 100px;
  height: 100px;
`;

export const ItemThema = styled.li`
  cursor: pointer;
  :hover {
    color: green;
  }
`;
