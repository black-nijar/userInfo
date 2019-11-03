import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCGOqL9hVtRMnv7CV5IFugcX8buzxr6czc",
  authDomain: "userinfo-e4534.firebaseapp.com",
  databaseURL: "https://userinfo-e4534.firebaseio.com",
  projectId: "userinfo-e4534",
  storageBucket: "userinfo-e4534.appspot.com",
  messagingSenderId: "85071368688",
  appId: "1:85071368688:web:223cce500dfbbdcc9acd35",
  measurementId: "G-13QD7S7Z53"
};
const Firebase = firebase.initializeApp(firebaseConfig);
const dataBase = Firebase.database().ref('userInfo')
export default dataBase;