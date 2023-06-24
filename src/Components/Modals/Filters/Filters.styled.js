import styled from 'styled-components';

export const FiltersContainer = styled.div`
  width: 300px;
  height: 367px;

  padding: 24px;
  background-color: var(--headerColor);

  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  label {
    color: var(--iconSideBarBoardColor);
    font-size: var(--fontSize12);
    font-family: Poppins;
    letter-spacing: var(--letterSpacing);

    cursor: pointer;
  }

  input {
    cursor: pointer;
  }
`;
