
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCw5yj_HFIHNnNiIqBagDvb_f-0wnh5454",
  authDomain: "facebook-clone-41e62.firebaseapp.com",
  projectId: "facebook-clone-41e62",
  storageBucket: "facebook-clone-41e62.appspot.com",
  messagingSenderId: "1088579947927",
  appId: "1:1088579947927:web:076b280110d25fdb6388d2",
  measurementId: "G-TNPRXVR5Y4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  { auth, provider};
export default db;
