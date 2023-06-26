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

import { GiSave } from 'react-icons/gi';
import { LoaderForAvatar } from '../../Loader/LoaderForAvatar/LoaderForAvatar';
import {
  FormUpdateUser,
  FeedbackFormGroup,
  PasswordWrapper,
  InputForm,
  ToggleShowPasword,
  Btnwrapper,
  BtnUpdate,
  StyleErrorMessage,
  Error,
  Edit,
  EditTitle,
  BtnClose,
  //===for avatar===/
  ProfilePhotoBlock,
  PhotoUser,
  SpanErrorImg,
  LabelEditPhoto,
  InputEditPhoto,
  BtnSaveFotoUser,
  PhotoBox,
} from './EditProfile.styled';

import url from '../../../images/icons/sprite/icons.svg';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

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
  const { data: currentUser } = useGetCurrentUserQuery();
  const [showPassword, setShowPassword] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const [updateUser] = useUpdateUserMutation();
  const [
    updateAvatar,
    { isLoading: isAvatarLoading, error: errorFormat, message: mes },
  ] = useChangeProfileAvatarMutation();
  console.log(errorFormat);
  console.log(mes);
  const dispatch = useDispatch();

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);
    setShowSaveButton(true);
  };

  const handleUpdateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('avatarImage', selectedAvatar);
      await updateAvatar(formData);
      setShowSaveButton(false);
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
      <ProfilePhotoBlock>
        <PhotoBox>
          <PhotoUser
            src={
              selectedAvatar
                ? URL.createObjectURL(selectedAvatar)
                : currentUser?.avatarURL || userDefault
            }
            alt="user avatar"
          ></PhotoUser>

          {!showSaveButton && (
            <LabelEditPhoto htmlFor="inputFile">
              <svg width="10" height="10">
                <use xlinkHref={`${url}#icon-plus`} />
              </svg>
            </LabelEditPhoto>
          )}
          {showSaveButton && (
            <BtnSaveFotoUser onClick={handleUpdateAvatar}>
              {isAvatarLoading ? (
                <LoaderForAvatar />
              ) : (
                <>
                  <GiSave size={20} color="rgba(22, 22, 22)" />
                </>
              )}
            </BtnSaveFotoUser>
          )}
        </PhotoBox>
        {errorFormat && (
          <SpanErrorImg>The image format must be jpg or png</SpanErrorImg>
        )}

        <InputEditPhoto
          name="avatarURL"
          type="file"
          accept="image/*"
          id="inputFile"
          onChange={handleAvatarChange}
        />
      </ProfilePhotoBlock>
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
              <ToggleShowPasword onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <BsEye color="#ffffff4d" style={{ width: 18, height: 18 }} />
                ) : (
                  <BsEyeSlash
                    color="#ffffff4d"
                    style={{ width: 18, height: 18 }}
                  />
                )}
              </ToggleShowPasword>
            </PasswordWrapper>
            <StyleErrorMessage name="password">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <Btnwrapper>
            <BtnUpdate type="submit">Send</BtnUpdate>
          </Btnwrapper>
        </FormUpdateUser>
      </Formik>
    </Edit>
  );
};

export default EditProfile;
