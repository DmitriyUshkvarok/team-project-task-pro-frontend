import styled from 'styled-components';

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  display: none;
`;

export const Fake = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid black;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 9px;
    height: 9px;
    background-color: green;
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s;
  }
`;

.Input: checked + .Fake::before{
    opacity: 1;
}

export const Text = styled.span``;
