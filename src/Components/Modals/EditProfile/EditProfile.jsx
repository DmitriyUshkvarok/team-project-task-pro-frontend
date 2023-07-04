import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import {
  useUpdateUserMutation,
  useChangeProfileAvatarMutation,
  useGetCurrentUserQuery,
} from '../../../redux/profileApi/profileApi';

import { GiSave } from 'react-icons/gi';
import { LoaderForAvatar } from '../../Loader/LoaderForAvatar/LoaderForAvatar';
import { LoaderForButton } from '../../Loader/LoaderForButton/LoaderForButton';
import {
  FormUpdateUser,
  FeedbackFormGroup,
  PasswordWrapper,
  InputForm,
  ToggleShowPassword,
  BtnWrapper,
  BtnUpdate,
  ErrorServer,
  StyleErrorMessage,
  Error,
  SuccessUpdateAvatar,
  Success,
  Edit,
  EditTitle,
  BtnClose,
  //===for avatar===/
  ProfilePhotoBlock,
  PhotoUser,
  SpanErrorImg,
  LabelEditPhoto,
  InputEditPhoto,
  BtnSavePhotoUser,
  PhotoBox,
  UserIconSvg,
} from './EditProfile.styled';

import url from '../../../images/icons/sprite/icons.svg';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(64, 'Name should not exceed 64 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)?$/,
      'Invalid name format'
    ),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      emailRegex.test(value);
      if (!value) return true;
      return emailRegex.test(value);
    })
    .optional()
    .notRequired(),
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces'),
});

const EditProfile = () => {
  const { data: currentUser } = useGetCurrentUserQuery();
  const [showPassword, setShowPassword] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showAvatarSuccessMessage, setShowAvatarSuccessMessage] =
    useState(false);
  const [showNameSuccessMessage, setShowNameSuccessMessage] = useState(false);
  const [showEmailSuccessMessage, setShowEmailSuccessMessage] = useState(false);
  const [showPasswordSuccessMessage, setShowPasswordSuccessMessage] =
    useState(false);
  const [isAvatarOnly, setIsAvatarOnly] = useState(false);

  const [updateUser, { isLoading: isInfoLoading, error: erorUpdate }] =
    useUpdateUserMutation();

  const [updateAvatar, { isLoading: isAvatarLoading, error: errorFormat }] =
    useChangeProfileAvatarMutation();
  const dispatch = useDispatch();

  const initialValues = {
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    password: '',
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);
    setShowSaveButton(true);
    setIsAvatarOnly(true);
  };

  const handleUpdateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('avatarImage', selectedAvatar);
      await updateAvatar(formData);
      setShowAvatarSuccessMessage(true);
      setShowSaveButton(false);

      setTimeout(() => {
        setShowAvatarSuccessMessage(false);
      }, 4000);
      setIsAvatarOnly(false);
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
      await updateUser(updatedUser);
      setShowNameSuccessMessage(true);

      setTimeout(() => {
        setShowNameSuccessMessage(false);
      }, 4000);
    }

    if (values.email) {
      updatedUser.email = values.email;
      try {
        await updateUser(updatedUser);
        setShowEmailSuccessMessage(true);

        setTimeout(() => {
          setShowEmailSuccessMessage(false);
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    }

    if (values.password) {
      updatedUser.password = values.password;
      try {
        await updateUser(updatedUser);
        setShowPasswordSuccessMessage(true);

        setTimeout(() => {
          setShowPasswordSuccessMessage(false);
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    }

    if (isAvatarOnly) {
      await handleUpdateAvatar();
      setShowAvatarSuccessMessage(true);

      return;
    }

    if (Object.keys(updatedUser).length === 0) {
      toast.warning('To save changes, at least one field must be filled');
      return;
    }

    try {
      await updateUser(updatedUser);

      if (selectedAvatar) {
        await handleUpdateAvatar();
      }
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
        {showAvatarSuccessMessage && !errorFormat && (
          <SuccessUpdateAvatar style={{ color: 'green' }}>
            Field successfully updated
          </SuccessUpdateAvatar>
        )}
        <PhotoBox>
          {selectedAvatar || currentUser?.avatarURL ? (
            <PhotoUser
              src={
                selectedAvatar
                  ? URL.createObjectURL(selectedAvatar)
                  : currentUser?.avatarURL
              }
              alt="user avatar"
            ></PhotoUser>
          ) : (
            <UserIconSvg>
              <use xlinkHref={`${url}#icon-user_default`} />
            </UserIconSvg>
          )}
          {!showSaveButton && (
            <LabelEditPhoto htmlFor="inputFile">
              <svg width="10" height="10">
                <use xlinkHref={`${url}#icon-plus+`} />
              </svg>
            </LabelEditPhoto>
          )}
          {showSaveButton && (
            <BtnSavePhotoUser onClick={handleUpdateAvatar}>
              {isAvatarLoading ? (
                <LoaderForAvatar />
              ) : (
                <>
                  <GiSave size={20} color="rgba(22, 22, 22)" />
                </>
              )}
            </BtnSavePhotoUser>
          )}
        </PhotoBox>

        {errorFormat && (
          <>
            {errorFormat.status === 500 && (
              <SpanErrorImg>{errorFormat.data.message}</SpanErrorImg>
            )}
            {errorFormat.status === 413 && (
              <SpanErrorImg>{errorFormat.data.message}</SpanErrorImg>
            )}
          </>
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
            {showNameSuccessMessage && (
              <Success style={{ marginTop: '5px', color: 'green' }}>
                Field successfully updated
              </Success>
            )}
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <InputForm
              type="email"
              name="email"
              placeholder="Edit email"
              autoComplete="off"
            />
            {erorUpdate && <ErrorServer>{erorUpdate.data.message}</ErrorServer>}
            <StyleErrorMessage name="email">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
            {showEmailSuccessMessage && (
              <Success style={{ marginTop: '5px', color: 'green' }}>
                Field successfully updated
              </Success>
            )}
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
                  <BsEyeSlash
                    color="var(--iconBSEyeColor)"
                    opacity="0.4000000059604645"
                    style={{ width: 18, height: 18 }}
                  />
                ) : (
                  <BsEye
                    color="var(--iconBSEyeColor)"
                    opacity="0.4000000059604645"
                    style={{ width: 18, height: 18 }}
                  />
                )}
              </ToggleShowPassword>
            </PasswordWrapper>
            <StyleErrorMessage name="password">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
            {showPasswordSuccessMessage && (
              <Success style={{ marginTop: '5px', color: 'green' }}>
                Field successfully updated
              </Success>
            )}
          </FeedbackFormGroup>
          <BtnWrapper>
            <BtnUpdate type="submit" disabled={isInfoLoading && !isAvatarOnly}>
              {isInfoLoading && !isAvatarOnly ? <LoaderForButton /> : 'Send'}
            </BtnUpdate>
          </BtnWrapper>
        </FormUpdateUser>
      </Formik>
    </Edit>
  );
};

export default EditProfile;
