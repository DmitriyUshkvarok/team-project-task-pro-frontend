import { Formik } from 'formik';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import userDefault from '../../../images/icons/iconsPng/user_default.png';
import { useState } from 'react';
import {
  useUpdateUserMutation,
  useChangeProfileAvatarMutation,
  useGetCurrentUserQuery,
} from '../../../redux/profileApi/profileApi';
import {
  FormUpdateUser,
  FeedbackFormGroup,
  PasswordWrapper,
  InputForm,
  ToggleShowPassword,
  BtnWrapper,
  BtnUpdate,
  StyleErrorMessage,
  Error,
  Edit,
  EditTitle,
  BtnClose,
} from './EditProfile.styled';

import url from '../../../images/icons/sprite/icons.svg';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'bootstrap';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).max(20),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    }),
  password: yup.string().min(10).max(20),
});

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const { data: currentUser } = useGetCurrentUserQuery();
  const [updateUser] = useUpdateUserMutation();
  const [updateAvatar] = useChangeProfileAvatarMutation();
  const dispatch = useDispatch();

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);
  };

  const handleUpdateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('avatarImage', selectedAvatar);
      await updateAvatar(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleUpdateUser = async (values, { resetForm }) => {
    const updatedUser = {};

    if (values.name) {
      updatedUser.name = values.name;
    }

    if (values.email) {
      updatedUser.email = values.email;
    }

    if (values.password) {
      updatedUser.password = values.password;
    }

    try {
      await updateUser(updatedUser);
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };
  return (
    <Edit>
      <BtnClose
        onClick={() => dispatch(closeModal())}
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          cursor: 'pointer',
        }}
      >
        <svg width="18" height="18">
          <use xlinkHref={`${url}#icon-x-close`} />
        </svg>
      </BtnClose>
      <EditTitle>Edit profile</EditTitle>
      <div>
        <img
          src={
            currentUser && currentUser.avatarURL
              ? currentUser.avatarURL
              : userDefault
          }
          alt="user avatar"
          style={{
            position: 'absolute',
            top: '75px',
            right: '166px',
            width: '86px',
            height: '86px',
          }}
        />
        <button
          onClick={handleUpdateAvatar}
          style={{
            position: 'absolute',
            top: '137px',
            right: '195px',
            cursor: 'pointer',
          }}
        >
          update
        </button>
        <label htmlFor="inputFile"></label>
        <input
          name="avatarURL"
          type="file"
          accept="image/*"
          id="inputFile"
          onChange={handleAvatarChange}
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleUpdateUser}
        autoComplete="off"
      >
        <FormUpdateUser>
          <FeedbackFormGroup>
            <InputForm
              type="text"
              name="name"
              placeholder="Edit name"
              autoComplete="off"
            />
            <StyleErrorMessage name="name">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <InputForm
              type="email"
              name="email"
              placeholder="Edit email"
              autoComplete="off"
            />
            <StyleErrorMessage name="email">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <PasswordWrapper>
              <InputForm
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Edit password"
                autoComplete="off"
              />
              <ToggleShowPassword onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
                ) : (
                  <BsEyeSlash
                    color="#ffffff4d"
                    style={{ width: 18, height: 18 }}
                  />
                )}
              </ToggleShowPassword>
            </PasswordWrapper>
            <StyleErrorMessage name="password">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <BtnWrapper>
            <BtnUpdate type="submit">Send</BtnUpdate>
          </BtnWrapper>
        </FormUpdateUser>
      </Formik>
    </Edit>
  );
};

export default EditProfile;
