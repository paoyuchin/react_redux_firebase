const initState = {
  authError: null,
  googleSigninInformation: null
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
      alert("登入成功 LOGIN_SUCCESS");
      return {
        ...state,
        authError: "LOGIN_SUCCESS"
      };
    case "SIGNOUT_SUCCESS":
      alert("登出成功");
      return {
        state
      };
    case "SIGNUP_SUCCESS":
      alert("註冊成功 SIGNUP_SUCCESS");
      console.log("註冊成功", state);
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      alert("註冊失敗 SIGNUP_ERROR");
      return {
        ...state,
        authError: action.err.message
      };
    case "GOOGLE_SIGNUP_SUCCESS":
      alert("google登入成功");
      console.log("google登入成功", action.userInformation);
      return {
        googleSigninInformation: action.userInformation
      };
    default:
      return state;
  }
};

export default authReducer;
