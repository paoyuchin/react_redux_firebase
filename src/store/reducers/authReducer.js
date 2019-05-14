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
    case "SIGNUP_SUCCESS":
      alert("註冊成功 SIGNUP_SUCCESS");
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
    default:
      return state;
  }
};

export default authReducer;
