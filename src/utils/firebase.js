// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeYAOaAaMHdI59JNS8b5DJqXfkWG04Mvw",
  authDomain: "netflixgpt-6909f.firebaseapp.com",
  projectId: "netflixgpt-6909f",
  storageBucket: "netflixgpt-6909f.firebasestorage.app",
  messagingSenderId: "780709534174",
  appId: "1:780709534174:web:e5f8aacc39bd06027be54f",
  measurementId: "G-9HQGPHDCZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();