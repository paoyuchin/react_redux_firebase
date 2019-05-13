const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_FAILED":
      alert("LOGIN_FAILED");
      return {
        ...state,
        authError: "LOGIN_FAILED"
      };
    case "LOGIN_SUCCESS":
      alert("LOGIN_SUCCESS");
      return {
        ...state,
        authError: "LOGIN_SUCCESS"
      };
    case "SIGNOUT_SUCCESS":
      alert("登出成功");
      return {
        state
      };
    default:
      return state;
  }
};

export default authReducer;
