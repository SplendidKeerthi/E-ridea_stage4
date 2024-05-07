import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCvw6wKeWpkHGo8L1DtAUo1dnD9T4FhztE",
  authDomain: "e-library-efdf2.firebaseapp.com",
  projectId: "e-library-efdf2",
  storageBucket: "e-library-efdf2.appspot.com",
  messagingSenderId: "412017580362",
  appId: "1:412017580362:web:9811972998e2f3bed709b3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()