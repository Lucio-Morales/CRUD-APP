// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFrbgPZWK0VlwUnmhf_LzSDF7bEWjc4rg",
  authDomain: "crud-app-30587.firebaseapp.com",
  projectId: "crud-app-30587",
  storageBucket: "crud-app-30587.appspot.com",
  messagingSenderId: "611228689655",
  appId: "1:611228689655:web:fb0f472af97c32a7e0dff2",
  measurementId: "G-F1NX7RGEB9",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default appFirebase;
