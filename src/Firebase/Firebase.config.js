// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt0l7ICrmoW31kbnbdazJv4hQigEReGXE",
  authDomain: "cars-doctor-56384.firebaseapp.com",
  projectId: "cars-doctor-56384",
  storageBucket: "cars-doctor-56384.appspot.com",
  messagingSenderId: "624028972064",
  appId: "1:624028972064:web:4a8a4bd00e0a7f5f927845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;