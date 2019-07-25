export const weatherAction = () => {
  return (dispatch) => {
    let position = {};
    if (!navigator.geolocation) {
      return
    };
    navigator.geolocation.getCurrentPosition(async (showPosition) => {
      position.lat = showPosition.coords.latitude;
      position.lon = showPosition.coords.longitude;
      const weather_api_key = '9a5f84034829a85ac2b2686990cffdcc';
      const url = `https://api.openweathermap.org/data/2.5/weather?&lat=${position.lat}&lon=${position.lon}&units=metric&APPID=${weather_api_key}&lang=zh_tw`
      let response = await fetch(url);
      const jsonResponse = await response.json()
      console.log('jsonResponse', jsonResponse)
      dispatch({
        type: "GET_WEATHER",
        weather_res: {
          weather: jsonResponse.weather[0].description,
          cityName: jsonResponse.name,
          weatherIconUrl: `https://openweathermap.org/img/w/${jsonResponse.weather[0].icon}.png`,
          tempeture: jsonResponse.main.temp,
        }
      });
    });   
  };
};



// https: //openweathermap.org/current
// https: //www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation
