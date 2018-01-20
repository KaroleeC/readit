// import firebase from 'firebase';
// //import keys from '../../config.js'
// // changed keys to process.env

// const config = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.FIREBASEDBURL,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STOREBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGEID
// };

// firebase.initializeApp(config);

// let auth = firebase.auth();

// const base = {
//   googleLogin: (event) => {
//     event.preventDefault();
//     let provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider)
//       .then((response) => {
//         console.log('GoogleLogin response: ', response);
//       })
//       .catch((err) => {
//         console.log('GoogleLogin error: ', err);
//       });
//   },
//   githubLogin: (event) => {
//     event.preventDefault();
//     let provider = new firebase.auth.GithubAuthProvider();
//     auth.signInWithPopup(provider)
//       .then((response) => {
//         console.log('Github login response: ', response);
//       })
//       .catch((err) => {
//         console.log('Github login error: ', err);
//       });
//   },
//   logout: () => {
//     auth.signOut();
//   },
//   auth: auth,
//   // session: (cb)=> {
//   //   console.log('session!!!!!!!!!')
//   //   auth.onAuthStateChanged(function(user) {
//   //     if (user) {
//   //       // User is signed in.
//   //       console.log(user,cb)
//   //       cb(user)
//   //     } else {
//   //       // No user is signed in.
//   //       cb(null)
//   //     }
//   //   })
//   // }
// }


// export default base;
