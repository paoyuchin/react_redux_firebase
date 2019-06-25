export const createProject = (project) => (dispatch, getState,{ getFirestore } ) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorID = getState().firebase.auth.uid;
  const authorNameSignInWithGoogle = getState().firebase.auth.displayName;
  const authorIDSignInWithGoogle = getState().firebase.auth.uid;
  console.log('///////////////////', project)
  console.log(getState().firebase.auth)
  firestore.collection("projects").add({
    ...project,
      authorFirstName: profile.firstName || authorNameSignInWithGoogle,
      authorLastName: profile.lastName || authorNameSignInWithGoogle,
      authorID: authorID || authorIDSignInWithGoogle,
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


// export const createProjectWithGoogleSignIn = project => (dispatch, getState, { getFirestore }) => {
//   const firestore = getFirestore();
//   const profile = getState().firebase.profile;
//   const authorID = getState().firebase.auth.uid;
//   console.log(1, getState().firebase)
//   firestore.collection("projects").add({
//     ...project,
//     authorFirstName: profile.firstName,
//     authorLastName: profile.lastName,
//     authorID: authorID,
//     creatAt: new Date()
//   }).then(() => {
//     dispatch({
//       type: "CREATE_PROJECT",
//       project
//     });
//   }).catch((err) => {
//     dispatch({
//       type: "CREATE_PROJECT_ERR",
//       err
//     });
//   })
// };

// export const createProject = (project) => (
//     {
//         type: 'ADD_PROJECT',
//         project: 'PROJECT'
//     }
// );

// A store is not a class.It's just an object with a few methods on it.
//To create it, pass your root reducing function to createStore.
