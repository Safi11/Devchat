import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDmGssOQcHzfba-cNT9jANd0ZARTCfOSK0",
  authDomain: "slackcloneinreact.firebaseapp.com",
  databaseURL: "https://slackcloneinreact.firebaseio.com",
  projectId: "slackcloneinreact",
  storageBucket: "slackcloneinreact.appspot.com",
  messagingSenderId: "262401702586",
  appId: "1:262401702586:web:7f2d3586c5ce530684e083",
  measurementId: "G-SHXMFWFZSE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;