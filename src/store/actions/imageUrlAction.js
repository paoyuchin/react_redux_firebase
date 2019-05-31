export const imageUrlAction = products => (
  dispatch,
  getState, {
    getFirestore,
    getFirebase
  }
) => {
  // if(!products){
  //   return;
  // }
  if (products) {
    let imgArrays = [];
    const firebase = getFirebase();
    const firestore = getFirestore();
    let storageRef = firebase.storage().ref();
    new Promise(
      function(resolve, reject) {
        products.map(product => {
          storageRef
            .child(`${product.imageName}.jpg`)
            .getDownloadURL()
            .then(url => {
              imgArrays.push(url);
              resolve(imgArrays);
            })
            .catch(error => {
              console.error(error);
            });
        });
      }
    ).then(resolve => {
      console.log(33333333333333333, resolve);
      firestore.collection("products").add({
        imgUrls: resolve
      })
    });
  }
};
// new Promise(()=>{products.map(product => {
//   storageRef
//     .child(`${product.imageName}.jpg`)
//     .getDownloadURL()
//     .then(url => {
//       imgArrays.push(url)
//       console.log(888888888, imgArrays)
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }})).then(()=>{
//   console.log('hi');
// })
// return imgArrays;

// A store is not a class.It's just an object with a few methods on it.
//To create it, pass your root reducing function to createStore.
