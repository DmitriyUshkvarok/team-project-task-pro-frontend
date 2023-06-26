// import React, { useState } from 'react';
// import * as yup from 'yup';
// import TextField from '@mui/material/TextField';
// import { Formik, Form } from 'formik';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';

// import {
//   AddCardModal,
//   Title,
//   InputTitle,
//   InputDescription,
//   StyledLabelColor,
//   StyledLabelDeadline,
//   RadioBtn,
//   Button,
//   StyleErrorMessage,
//   Item,
//   RadioButton,
//   RadioButtonLabel,
// } from './EditCard.styled';

// const ModalEditCard = ({ titel, description, labelColor, deadline }) => {
//   const [select, setSelect] = useState(labelColor);

//   const today = new Date();

//   const initialValues = {
//     title: '123',
//     description: 'fsdfsdfsdfsdfd',
//     labelColor: select,
//     deadline: deadline,
//   };

//   const schema = yup.object({
//     title: yup.string().required('Title is required').max(30),
//     description: yup.string().required('Description is required'),
//     labelColor: yup.string().required('Label color is required'),
//     deadline: yup.date().required('Deadline is required'),
//   });

//   const handleSelectChange = (event) => {
//     const value = event.target.value;
//     setSelect(value);
//   };

//   const handleSubmit = async (values) => {
//     alert(JSON.stringify(values, null, 2));
//     // ***DISPATCH на ЗМІНУ */
//     // ****** не забути закрити форму після відправки */
//   };

//   return (
//     <AddCardModal>
//       {/* <button>close</button> */}
//       <Title>Edit card</Title>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={schema}
//         autoComplete="off"
//       >
//         {({ setFieldValue }) => (
//           <Form>
//             <div>
//               <InputTitle
//                 id="title"
//                 name="title"
//                 type="text"
//                 placeholder="Title"
//               />
//               <StyleErrorMessage name="title" component="div" />
//             </div>

//             <div>
//               <InputDescription
//                 as="textarea"
//                 id="description"
//                 name="description"
//                 type="text"
//                 onChange={(event) =>
//                   setFieldValue('description', event.target.value)
//                 }
//                 placeholder="Description"
//               />
//               <StyleErrorMessage name="description" component="div" />
//             </div>

//             <div>
//               <StyledLabelColor id="labelColor">Label color</StyledLabelColor>
//               <RadioBtn role="group" aria-labelledby="my-radio-group">
//                 <Item value="low">
//                   <RadioButton
//                     value="low"
//                     type="radio"
//                     id="low"
//                     name="labelColor"
//                     onChange={(event) => {
//                       handleSelectChange(event);
//                       setFieldValue('labelColor', event.target.value);
//                     }}
//                     checked={select === 'low'}
//                   />
//                   <RadioButtonLabel htmlFor="low"></RadioButtonLabel>
//                 </Item>
//                 <Item value="medium">
//                   <RadioButton
//                     type="radio"
//                     id="medium"
//                     name="labelColor"
//                     onChange={(event) => {
//                       handleSelectChange(event);
//                       setFieldValue('labelColor', event.target.value);
//                     }}
//                     checked={select === 'medium'}
//                     value="medium"
//                   />
//                   <RadioButtonLabel htmlFor="medium"></RadioButtonLabel>
//                 </Item>
//                 <Item value="high">
//                   <RadioButton
//                     type="radio"
//                     id="high"
//                     name="labelColor"
//                     onChange={(event) => {
//                       handleSelectChange(event);
//                       setFieldValue('labelColor', event.target.value);
//                     }}
//                     checked={select === 'high'}
//                     value="high"
//                   />
//                   <RadioButtonLabel htmlFor="high"></RadioButtonLabel>
//                 </Item>

//                 <Item value="without priority">
//                   <RadioButton
//                     type="radio"
//                     id="without priority"
//                     name="labelColor"
//                     onChange={(event) => {
//                       handleSelectChange(event);
//                       setFieldValue('labelColor', event.target.value);
//                     }}
//                     value="without priority"
//                     checked={select === 'without priority'}
//                   />
//                   <RadioButtonLabel htmlFor="without priority"></RadioButtonLabel>
//                 </Item>
//               </RadioBtn>
//               <StyleErrorMessage name="labelColor" component="div" />
//             </div>

//             <div>
//               <StyledLabelDeadline> Deadline</StyledLabelDeadline>
//               <DatePicker
//                 defaultValue={dayjs(today)}
//                 name="deadline"
//                 onChange={(date) => setFieldValue('deadline', date)}
//                 disablePast
//                 views={['month', 'day']}
//                 // open={true}

//                 PopperProps={{
//                   sx: {
//                     '&.MuiPickersCalendarHeader-labelContainer': {
//                       color: 'red',
//                     },
//                     '&.MuiPickersPopper-root': {
//                       border: '4px solid red',
//                     },
//                     '&.MuiInputBase': {
//                       color: 'red',
//                     },
//                   },
//                 }}
//                 renderInput={(params) => <TextField {...params} />}
//               />
//               <StyleErrorMessage name="deadline" component="div" />
//             </div>

//             <Button type="submit">+Add</Button>
//           </Form>
//         )}
//       </Formik>
//     </AddCardModal>
//   );
// };

// export default ModalEditCard;
