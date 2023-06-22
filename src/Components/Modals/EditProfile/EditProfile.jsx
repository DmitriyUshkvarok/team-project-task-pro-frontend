import { Formik } from 'formik';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
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
  ToggleShowPasword,
  Btnwrapper,
  BtnUpdate,
  StyleErrorMessage,
  Error,
} from './EditProfile.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).max(20),
  email: yup.string(),
  password: yup.string().min(10).max(20),
});

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const { data: currentUser } = useGetCurrentUserQuery();
  const [updateUser] = useUpdateUserMutation();
  const [updateAvatar] = useChangeProfileAvatarMutation();

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
    <div>
      <button>close</button>
      <h3>Edit profile</h3>
      <div>
        <img
          src={
            currentUser && currentUser.avatarURL
              ? currentUser.avatarURL
              : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
          }
          alt="user avatar"
        />
        <button onClick={handleUpdateAvatar}>update</button>
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
              <ToggleShowPasword onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <BsEyeSlash color="var(--border-color)" />
                ) : (
                  <BsEye color="var(--border-color)" />
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
    </div>
  );
};

export default EditProfile;
