const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getIsRefreshing = (state) => state.auth.isRefreshing;

const getName = (state) => state.auth?.user?.name;

const getEmail = (state) => state.auth.user.email;

const selectToken = (state) => state.auth.token;

const getid = (state) => state.auth.user.id;

const getTheme = (state) => state.auth?.user?.theme;

const getAvatar = (state) => state.auth?.user?.avatarURL;

const getBoards = (state) => state.auth?.user?.boards;

const getCurrentBoard = (state) => state.auth?.user?.currentBoard;

const authSelector = {
  getIsLoggedIn,
  getIsRefreshing,
  getName,
  getEmail,
  selectToken,
  getid,
  getTheme,
  getAvatar,
  getBoards,
  getCurrentBoard,
};

export default authSelector;
