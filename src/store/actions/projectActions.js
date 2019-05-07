export const createProject = (project) => (
    (dispatch, getState) => {
        console.log('project', project)
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
    }
);


// export const createProject = (project) => (
//     {
//         type: 'ADD_PROJECT',
//         project: 'PROJECT'
//     }
// );

// A store is not a class.It's just an object with a few methods on it. 
//To create it, pass your root reducing function to createStore.