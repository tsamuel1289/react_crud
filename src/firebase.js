import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvaYGi8UcyAK-yuyr8xCiqCTTFsv0w5i4",
    authDomain: "react-crud-80cb6.firebaseapp.com",
    projectId: "react-crud-80cb6",
    storageBucket: "react-crud-80cb6.appspot.com",
    messagingSenderId: "480328981541",
    appId: "1:480328981541:web:b359585e7eaa4731edf3cc"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();