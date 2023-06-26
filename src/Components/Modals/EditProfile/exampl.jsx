import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SectionProfileInfo,
  ProfileUserBox,
  InfoUserTitle,
  ProfileInfoWrapper,
  ProfilePhotoBlock,
  PhotoUser,
  SpanErrorImg,
  LabelEditPhoto,
  InputEditPhoto,
  StyleMdAddAPhoto,
  BtnSaveFotoUser,
  SpanEditPhoto,
  ProfileInfoList,
  ProfileInfoItem,
  LabelInfo,
  IputInfoContainer,
  InputInfo,
  LogoutBlock,
  Span,
  IconInfoUserContainer,
  SpanInfoUser,
  StyleHiPencil,
  StyleHiCheck,
  ErrorSpan,
  StyleTbLogout,
} from './ProfileInformation.styled';
import Notiflix from 'notiflix';
import { GiSave } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import {
  useChangeProfileAvatarMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from '../../redux/profileApi/profileApi';

const ProfileInformation = () => {
  const [editing, setEditing] = useState({
    name: false,
    email: false,
    birthday: false,
    phone: false,
    location: false,
  });

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showSaveButton, setShowSaveButton] = useState(false);

  const [updateAvatar, { isLoading: isAvatarLoading, error: errorFormat }] =
    useChangeProfileAvatarMutation();
  const { data: currentUser } = useGetCurrentUserQuery();
  const [updateUser, { error: errorBirthday }] = useUpdateUserMutation();

  const dateObj = new Date(currentUser?.birthday);
  const day = dateObj.getDate();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);
    setShowSaveButton(true);
  };

  const handleUpdateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('avatar', selectedAvatar);
      await updateAvatar(formData);
      setShowSaveButton(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUser = async (fieldName) => {
    try {
      const data = {
        [fieldName]: inputValue,
      };
      await updateUser(data);
      setEditing((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      () => {
        dispatch(authOperation.logOut());
        navigate('/login');
      },
      () => {}
    );
  };

  const handleEditClick = (fieldName) => {
    setEditing((prevState) => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  return (
    <>
      <SectionProfileInfo>
        <ProfileUserBox>
          <InfoUserTitle>My information:</InfoUserTitle>
          <ProfileInfoWrapper>
            <ProfilePhotoBlock>
              <PhotoUser
                src={
                  selectedAvatar
                    ? URL.createObjectURL(selectedAvatar)
                    : currentUser?.avatarURL ||
                      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
                }
                alt="photo user"
              ></PhotoUser>
              {errorFormat && (
                <SpanErrorImg>The image format must be jpg or png</SpanErrorImg>
              )}
              <LabelEditPhoto htmlFor="inputFile">
                <StyleMdAddAPhoto size={30} />
                <SpanEditPhoto>Edit Photo</SpanEditPhoto>
              </LabelEditPhoto>
              <InputEditPhoto
                name="avatar"
                type="file"
                accept="image/*"
                id="inputFile"
                onChange={handleAvatarChange}
              />
              {showSaveButton && (
                <BtnSaveFotoUser onClick={handleUpdateAvatar}>
                  {isAvatarLoading ? (
                    'Loading...'
                  ) : (
                    <>
                      <GiSave
                        size={20}
                        color="var(--accentColor)"
                        style={{ marginRight: '5px' }}
                      />
                      Save
                    </>
                  )}
                </BtnSaveFotoUser>
              )}
            </ProfilePhotoBlock>
            <ProfileInfoList>
              <ProfileInfoItem>
                <LabelInfo>Name:</LabelInfo>
                <IputInfoContainer>
                  {editing.name ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="name"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.name}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.name ? (
                    <StyleHiCheck onClick={() => handleUpdateUser('name')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('name')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Email:</LabelInfo>
                <IputInfoContainer>
                  {editing.email ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="email"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.email}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.email ? (
                    <StyleHiCheck onClick={() => handleUpdateUser('email')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('email')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Birthday:</LabelInfo>
                <IputInfoContainer>
                  {editing.birthday ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="birthday"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{formattedDate}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                {errorBirthday && (
                  <ErrorSpan>
                    birthday must be in (yyy-mm-dd) date format
                  </ErrorSpan>
                )}
                <IconInfoUserContainer>
                  {editing.birthday ? (
                    <StyleHiCheck
                      onClick={() => handleUpdateUser('birthday')}
                    />
                  ) : (
                    <StyleHiPencil
                      onClick={() => handleEditClick('birthday')}
                    />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>Phone:</LabelInfo>
                <IputInfoContainer>
                  {editing.phone ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="phone"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.phone}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.phone ? (
                    <StyleHiCheck onClick={() => handleUpdateUser('phone')} />
                  ) : (
                    <StyleHiPencil onClick={() => handleEditClick('phone')} />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
              <ProfileInfoItem>
                <LabelInfo>City:</LabelInfo>
                <IputInfoContainer>
                  {editing.location ? (
                    <InputInfo
                      autoFocus
                      type="text"
                      name="location"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <SpanInfoUser>{currentUser?.location}</SpanInfoUser>
                  )}
                </IputInfoContainer>
                <IconInfoUserContainer>
                  {editing.location ? (
                    <StyleHiCheck
                      onClick={() => handleUpdateUser('location')}
                    />
                  ) : (
                    <StyleHiPencil
                      onClick={() => handleEditClick('location')}
                    />
                  )}
                </IconInfoUserContainer>
              </ProfileInfoItem>
            </ProfileInfoList>
            <LogoutBlock onClick={handleLogOut}>
              <StyleTbLogout />
              <Span>Log Out</Span>
            </LogoutBlock>
          </ProfileInfoWrapper>
        </ProfileUserBox>
      </SectionProfileInfo>
    </>
  );
};

export default ProfileInformation;
