// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9nwr4nVNGci9vax8mcjkRQEhG0TOGVyg",
    authDomain: "login-68e7a.firebaseapp.com",
    projectId: "login-68e7a",
    storageBucket: "login-68e7a.appspot.com",
    messagingSenderId: "548795945356",
    appId: "1:548795945356:web:49b05dffe38ee56ba806a9"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };
