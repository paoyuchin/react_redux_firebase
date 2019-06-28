export const MakeReviewAction = (project) => (dispatch, getState,{ getFirestore } ) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorID = getState().firebase.auth.uid;
  const authorNameSignInWithGoogle = getState().firebase.auth.displayName;
  const authorIDSignInWithGoogle = getState().firebase.auth.uid;
  firestore.collection("projects").add({
    ...project,
      authorFirstName: profile.firstName || authorNameSignInWithGoogle,
      authorLastName: profile.lastName || authorNameSignInWithGoogle,
      authorID: authorID || authorIDSignInWithGoogle,
      creatAt: new Date()
  }).then(()=>{
      dispatch({
        type: "CREATE_REVIEW",
        project
      });
  }).catch((err) => {
      dispatch({
        type: "CREATE_REVIEW_ERR",
        err
      });
  })
};

// A store is not a class.It's just an object with a few methods on it.
//To create it, pass your root reducing function to createStore.
