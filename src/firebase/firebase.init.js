// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByyO7tEMShnKvUDrmHURIthUXkMcwsHyk",
  authDomain: "email-password-auth-b487c.firebaseapp.com",
  projectId: "email-password-auth-b487c",
  storageBucket: "email-password-auth-b487c.appspot.com",
  messagingSenderId: "522395705413",
  appId: "1:522395705413:web:98d812cd9558a8cd6b032c",
  measurementId: "G-GZMQ8S8CX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;