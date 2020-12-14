import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC5RB-rygEx_BfBGB9Rs5AX4xXqr9MLHEE",
    authDomain: "nyoustarde.firebaseapp.com",
    projectId: "nyoustarde",
    storageBucket: "nyoustarde.appspot.com",
    messagingSenderId: "913997677870",
    appId: "1:913997677870:web:1509de482d225921fc26bf"
  };

const app = firebase.initializeApp(firebaseConfig);

// Exporto o firestore para ser utilizado nos components
export const db = app.firestore();

export const storage = app.storage();
export default firebaseConfig;