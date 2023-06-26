import styled from 'styled-components';

export const ToDoBox = styled.div`
  background-color: var(--headerPageColor);
  padding: 40px 20px 0 20px;
`;
export const AddColumnBtn = styled.button`
  background-color: var(--todolistColor);
  color: var(--titleColor);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  width: 335px;
  height: 56px;
  border: none;
  font-family: var(-poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  border-radius: var(--borderRadius8);
  cursor: pointer;
`;
export const AddIcon = styled.svg`
  padding: 7px;
  background-color: var(--btnIconColor);
  border-radius: var(--borderRadius8);
`;
export const TitleBox = styled.div`
  background-color: var(--todolistColor);
  width: 335px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  border-radius: var(--borderRadius8);
  margin: 14px 0;
  padding: 18px 20px;
`;
export const TitleColumn = styled.h2`
  color: var(--titleColor);
  font-family: var(-poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
`;
export const TitleIcons = styled.div`
  display: flex;
`;
export const ColumnEditBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const ColumnDeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const ColumnsIcon = styled.svg`
  stroke: var(--IconCloseColor);
  opacity: 50%;
`;
export const AddCardBtn = styled.button`
  background-color: var(--accentColor);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  width: 335px;
  height: 56px;
  border: none;
  color: var(--addCardIconColor);
  font-family: var(-poppinsFont);
  font-weight: var(--fontWeight500);
  font-size: var(--fontSize14);
  border-radius: var(--borderRadius8);
  cursor: pointer;
`;
export const AddCardIcon = styled.svg`
  stroke: var(--IconCloseColor);
`;
