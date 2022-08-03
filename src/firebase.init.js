// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoCJb0XRn70mUMhtZkoF-F5c2r-PpndIU",
    authDomain: "router-firebase-integrat-9c2a2.firebaseapp.com",
    projectId: "router-firebase-integrat-9c2a2",
    storageBucket: "router-firebase-integrat-9c2a2.appspot.com",
    messagingSenderId: "907548376691",
    appId: "1:907548376691:web:3ec34f02008bbfda5df406",
    measurementId: "G-4428PWYRJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;