// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ4DurRYvsS_girD7R5w12gf3_Pvb5iSk",
  authDomain: "bambasinc-38c95.firebaseapp.com",
  projectId: "bambasinc-38c95",
  storageBucket: "bambasinc-38c95.firebasestorage.app",
  messagingSenderId: "961246762107",
  appId: "1:961246762107:web:429aaa9638096dec0a3ede",
  measurementId: "G-4QNN9XM74T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
