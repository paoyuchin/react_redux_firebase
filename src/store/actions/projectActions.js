export const createProject = project => (dispatch, getState,{ getFirestore, getFirebase } ) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorID = getState().firebase.auth.uid;
  firestore.collection("projects").add({
    ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorID: authorID,
    creatAt: new Date()
  }).then(()=>{
      dispatch({
          type: "CREATE_PROJECT",
          project
      });
  }).catch((err) => {
      dispatch({
          type: "CREATE_PROJECT_ERR",
          err
      });
  })
};

// export const createProject = (project) => (
//     {
//         type: 'ADD_PROJECT',
//         project: 'PROJECT'
//     }
// );

// A store is not a class.It's just an object with a few methods on it.
//To create it, pass your root reducing function to createStore.
