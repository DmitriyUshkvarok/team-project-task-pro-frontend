import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const AddCardModal = styled.div`
  width: 335px;
  height: 522px;
  background-color: var(--whiteColor);
  border-radius: var(--borderRadius8);
  padding: 24px;


//   font-family: var(--poppinsFont);

//   color: var(--whiteColor);
//   margin-top: 20px;

//   @media screen and (min-width: 768px) {
//     width: 350px;
//   }
// `;

// export const Title = styled.h2`
//   font-size: var(--fontSize18);
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   font-weight: var(--fontWeight500);
//   letter-spacing: -0.36px;

//   margin-bottom: 24px;
//   text-align: left;
// `;

// export const InputTitle = styled(Field)`
//   width: 287px;
//   padding: 14px 18px;

//   background-color: inherit;
//   border-radius: var(--borderRadius8);
//   border: 1px solid var(--accentColor);
//   color: var(--whiteColor);
//   line-height: 18px;

//   font-family: var(--poppinsFont);
//   font-size: var(--fontSize14);
//   letter-spacing: -0.28px;

//   @media screen and (min-width: 768px) {
//     width: 302px;
//   }
// `;

// export const InputDescription = styled(Field)`
//   width: 287px;
//   height: 154px;
//   padding: 14px 18px 30px;

//   background-color: inherit;
//   border-radius: var(--borderRadius8);
//   border: 1px solid var(--accentColor);
//   color: var(--whiteColor);
//   line-height: 18px;

//   font-family: var(--poppinsFont);
//   font-size: var(--fontSize14);
//   letter-spacing: -0.28px;

//   resize: none;

//   margin-top: 14px;

//   @media screen and (min-width: 768px) {
//     width: 302px;
//   }
// `;

// export const StyledLabelColor = styled.p`
//   font-size: var(--fontSize12);
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   font-weight: var(--fontWeight500);
//   letter-spacing: -0.24px;
//   color: var(--opacityWhite2);

//   margin-top: 24px;
//   margin-bottom: 4px;
//   text-align: left;
// `;

// export const StyledLabelDeadline = styled.p`
//   font-size: var(--fontSize12);
//   text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   font-weight: var(--fontWeight500);
//   letter-spacing: -0.24px;
//   color: var(--opacityWhite2);

//   margin-top: 14px;
//   margin-bottom: 4px;
//   text-align: left;
// `;

// export const Button = styled.button`
//   width: 287px;
//   padding: 10px 0px;
//   border-radius: var(--borderRadius8);

//   background-color: var(--accentColor);
//   border: 0px;

//   font-size: var(--fontSize14);
//   font-weight: var(--fontWeight500);
//   letter-spacing: -0.28px;

//   margin-top: 40px;

//   @media screen and (min-width: 768px) {
//     width: 302px;
//   }
// `;

// export const StyleErrorMessage = styled(ErrorMessage)`
//   color: red;
//   margin-top: 5px;
//   font-size: var(--fontSize10);
// `;

// export const RadioBtn = styled.div`
//   display: flex;
//   text-align: left;
//   margin-bottom: 14px;
// `;

// export const Item = styled.div`
//   border: 2px solid;
//   width: 16px;
//   max-height: 16px;
//   border-radius: 50%;
//   margin-right: 8px;
//   background-color: ${(props) => {
//     if (props.value === 'low') {
//       return '#8FA1D0';
//     } else if (props.value === 'medium') {
//       return '#E09CB5';
//     } else if (props.value === 'high') {
//       return '#BEDBB0';
//     } else {
//       return '#ffffff4d';
//     }
//   }};
//   border-color: ${(props) => {
//     if (props.value === 'low') {
//       return '#8FA1D0';
//     } else if (props.value === 'medium') {
//       return '#E09CB5';
//     } else if (props.value === 'high') {
//       return '#BEDBB0';
//     } else {
//       return '#ffffff4d';
//     }
//   }};
// `;

// export const RadioButtonLabel = styled.label`
//   min-width: 14px;
//   min-height: 14px;
//   margin-right: 8px;
// `;

// export const RadioButton = styled(Field)`
//   position: absolute;
//   z-index: -1;
//   opacity: 0;
//   justify-content: center;
//   align-items: center;

//   & + ${RadioButtonLabel} {
//     min-width: 14px;
//     min-height: 14px;
//     margin-right: 8px;

//     display: flex;
//     align-items: baseline;
//     &:before {
//       content: '';
//       display: flex;
//       z-index: 99;
//       min-width: 14px;
//       min-height: 14px;

//       background-color: ${(props) => {
//         if (props.value === 'low') {
//           return '#8FA1D0';
//         } else if (props.value === 'medium') {
//           return '#E09CB5';
//         } else if (props.value === 'high') {
//           return '#BEDBB0';
//         } else {
//           return '#ffffff4d';
//         }
//       }};
//       border-radius: 80%;
//     }
//   }
//   &:checked + ${RadioButtonLabel}:before {
//     min-width: 13px;
//     min-height: 13px;
//     border: solid 3px black;
//   }
// `;
