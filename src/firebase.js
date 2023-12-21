import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfvmp1DKk12Vsjjc_-a48iFkay7q5v3Oo",
  authDomain: "fir-auth-11-6af59.firebaseapp.com",
  projectId: "fir-auth-11-6af59",
  storageBucket: "fir-auth-11-6af59.appspot.com",
  messagingSenderId: "256399884270",
  appId: "1:256399884270:web:49e020f24d3cd1ccb8d8ff",
  measurementId: "G-SRVDBX91HK"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export default {app, auth};

export default firebase;
