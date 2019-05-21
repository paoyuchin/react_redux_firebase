export const imageUrlAction = imageName => (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
    console.log("imageName", imageName);
  const firebase = getFirebase();
  let storageRef = firebase.storage().ref();
  storageRef
    .child(`${imageName}.jpg`)
    .getDownloadURL()
    .then(url => {
      console.log("url", url);
    })
    .catch(error => {
      console.error(error);
    });
};

// A store is not a class.It's just an object with a few methods on it.
//To create it, pass your root reducing function to createStore.
