const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getIsRefreshing = (state) => state.auth.isRefreshing;

const getName = (state) => state.auth.user.name;

const getEmail = (state) => state.auth.user.email;

const selectToken = (state) => state.auth.token;

const getid = (state) => state.auth.user.id;

const getTheme = (state) => {
  console.log(state);
  return state.auth?.user?.theme;
};

const authSelector = {
  getIsLoggedIn,
  getIsRefreshing,
  getName,
  getEmail,
  selectToken,
  getid,
  getTheme,
};

export default authSelector;
