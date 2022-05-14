// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQonPAbtahz9DCq5L3QmzLep9bBPQejnk",
  authDomain: "netflix-clone-f6d48.firebaseapp.com",
  projectId: "netflix-clone-f6d48",
  storageBucket: "netflix-clone-f6d48.appspot.com",
  messagingSenderId: "593501695910",
  appId: "1:593501695910:web:65e2be75bc826046bca967",
  measurementId: "G-2BNR0Q2EYX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()
const analytics = getAnalytics(app);

export default app
export { auth, db }

