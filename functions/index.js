const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("big baby :)");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => {
      console.log("notification added", doc);
    });
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "新增了一則評論",
      user: `${project.authorFirstName}${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });
<<<<<<< HEAD

exports.userJoined = functions.auth //trigger when user use auth service
  .user()
  .onCreate(user => {
    console.log('user', user)
    return admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then(doc => {
        const newUser = doc.data();
        const notification = {
          content: "is new our member!!",
          user: `${newUser.firstName}${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };
        return createNotification(notification);
      });
  });

// exports.getProductWithImageUrl = functions.https.onRequest((req, res) => {
//   admin.firestore().collection("products").get().then( snapshot => {
//     snapshot.forEach( product => {
//       console.log(product.data().imageName)
//       console.log(admin.storage())
//       console.log(firebase)
//       // console.log(functions.storage())
//       // console.log(functions.storage().ref())
//       // console.log(admin.storage().ref())
//       admin.storage()
//         .child(`${ product.data().imageName }.jpg`)
//         .getDownloadURL().then(imageUrl => {
//           console.log(imageUrl)
//           res.send({
//             ...product.data(),
//             imageUrl
//           })
//         })
//     })
//   }).catch(reason => {
//     res.send(reason)
//   });
// })
=======
>>>>>>> 6a0b845a90577134af2a2d3644fa408d9405a70c
