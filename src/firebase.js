import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyA02zYBv1VJyxatDD9LyB-MA2UBcabsBFo",
    authDomain: "fir-auth-test-43ddd.firebaseapp.com",
    projectId: "fir-auth-test-43ddd",
    storageBucket: "fir-auth-test-43ddd.appspot.com",
    messagingSenderId: "707222261886",
    appId: "1:707222261886:web:49a7ebf2bb77d7ddaf082f"
})

export const auth = app.auth()
export default app