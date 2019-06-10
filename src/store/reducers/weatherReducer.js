const initState = {
  
};
const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
    console.log(action.weather_res)
      return action.weather_res
    default:
      return state;
  }
};

export default weatherReducer;
