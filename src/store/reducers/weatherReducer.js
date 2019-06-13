const initState = {};
const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return action.weather_res
    default:
      return state;
  }
};

export default weatherReducer;
