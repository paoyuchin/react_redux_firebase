export const createProject = project => (dispatch,getState,{ getFirestore, getFirebase } ) => {
  //make some asy code here
  const firestore = getFirestore();
  firestore.collection("projects").add({
    ...project,
    authorFirstName: "pao",
    authorLastName: "yuchin",
    authorID: 1234,
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
