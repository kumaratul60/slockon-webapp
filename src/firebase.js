import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDw9CwuuT5_FfhhMfWtWA0VZ1znbYs1G2E",
  authDomain: "slack-v2-8921.firebaseapp.com",
  projectId: "slack-v2-8921",
  storageBucket: "slack-v2-8921.appspot.com",
  messagingSenderId: "1021795984018",
  appId: "1:1021795984018:web:bfd6970ee162830025fc4b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
// export default db;
