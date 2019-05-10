
const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOGIN_FAILED":
        console.log("LOGIN_FAILED");
        return {
          ...state,
          authError: "LOGIN_FAILED"
        };
      case "LOGIN_SUCCESS":
        console.log("LOGIN_SUCCESS");
        return{
            ...state,
            authError: "LOGIN_SUCCESS"            
        }
      default: 
        return state;        
    }
};

export default authReducer;