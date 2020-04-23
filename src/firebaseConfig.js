import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
const Firebase = firebase.initializeApp(firebaseConfig);
const dataBase = Firebase.database().ref('userInfo')
export default dataBase;
