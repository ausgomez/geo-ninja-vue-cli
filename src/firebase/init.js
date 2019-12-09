import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAiiDSQkjMd5cq7aPTf-0F8Z3-hEwKqrB8",
  authDomain: "geo-ninjas-1575869489308.firebaseapp.com",
  databaseURL: "https://geo-ninjas-1575869489308.firebaseio.com",
  projectId: "geo-ninjas-1575869489308",
  storageBucket: "geo-ninjas-1575869489308.appspot.com",
  messagingSenderId: "717370547530",
  appId: "1:717370547530:web:4930bc9b2f752dd9bcf5b3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()