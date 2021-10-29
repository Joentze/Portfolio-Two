import firebase from "firebase/app";
import "firebase/firestore";

export const fbconfig = {
    apiKey: "AIzaSyAFTaeTwFwjNz7aaUMlbObOevoIf28oKSc",
    authDomain: "portfolio-site-two.firebaseapp.com",
    projectId: "portfolio-site-two",
    storageBucket: "portfolio-site-two.appspot.com",
    messagingSenderId: "738711165336",
    appId: "1:738711165336:web:2326491547b8d3265b73ed",
    measurementId: "G-J5Y6HC1Y2G"
  };


export const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(fbconfig);
;

export const db = firebase.firestore();
export const firestore = firebase.firestore;
