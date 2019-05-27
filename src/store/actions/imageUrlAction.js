export const imageUrlAction = products => (
  dispatch,
  getState, {
    getFirestore,
    getFirebase
  }
) => {
  const firebase = getFirebase();
  let storageRef = firebase.storage().ref();
  const firestore = getFirestore();
  const urls = []
  if (products) {
    products.map(product => {
      new Promise((resolve, reject) => (
        storageRef
          .child(`${product.imageName}.jpg`)
          .getDownloadURL()
          .then(url => {
            resolve(url);
          })
      )).then(url => {
        console.log(product)
        firestore.collection("products").add({
          ...product,
          imgurl: url
        })
      })
    })
  }
}



// A store is not a class.It's just an object with a few methods on it.
//To create it, pass your root reducing function to createStore.
