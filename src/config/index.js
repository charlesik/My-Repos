// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVaT6Qedn_TvpiihAhzECmIFW9ImY_zdw",
  authDomain: "my-github-repos.firebaseapp.com",
  projectId: "my-github-repos",
  storageBucket: "my-github-repos.appspot.com",
  messagingSenderId: "910341229120",
  appId: "1:910341229120:web:0f4bcb6389cf03e5586da5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;