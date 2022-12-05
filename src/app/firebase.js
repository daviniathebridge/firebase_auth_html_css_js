// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04AKUw_rqykKonfSsCtuVEQh1kLKj0sA",
  authDomain: "fir-app-8634e.firebaseapp.com",
  projectId: "fir-app-8634e",
  storageBucket: "fir-app-8634e.appspot.com",
  messagingSenderId: "742840512042",
  appId: "1:742840512042:web:fd1ed2e5ce247a04f51d53",
  measurementId: "G-XBWTVQ08ZV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)