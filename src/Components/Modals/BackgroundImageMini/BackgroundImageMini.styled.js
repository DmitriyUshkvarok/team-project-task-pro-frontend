import styled from 'styled-components';

export const Container = styled.div`
  h4 {
    text-align: start;
    color: var(--whiteColor);
    font-size: var(--fontSize14);
    font-family: var(--poppinsFont);
    font-weight: var(--fontWeight500);
    letter-spacing: var(--letterSpacing28);
    margin: 0px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 14px;

    margin-bottom: 14px;
  }
  li {
    width: 28px;
    height: 28px;
    background-color: rgba(246, 246, 247, 1);
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`;
