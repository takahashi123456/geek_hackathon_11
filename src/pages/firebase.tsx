import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/firestore'
import "firebase/storage";

// const {
//     REACT_APP_FIREBASE_API_KEY,
//     REACT_APP_FIREBASE_AUTH_DOMAIN,
//     REACT_APP_FIREBASE_DATABASE_URL,
//     REACT_APP_FIREBASE_PROJECT_ID,
//     REACT_APP_FIREBASE_STORAGE_BUCKET,
//     REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     REACT_APP_FIREBASE_APP_ID,
// } = process.env
const REACT_APP_FIREBASE_API_KEY = 'AIzaSyAvJsR2aCCLnRlXszSlIrEx-AkuJ-5cK4w'
const REACT_APP_FIREBASE_AUTH_DOMAIN = 'workshop-20211106.firebaseapp.com'
const REACT_APP_FIREBASE_DATABASE_URL = 'https://workshop-20211106-default-rtdb.asia-southeast1.firebasedatabase.app'
const REACT_APP_FIREBASE_PROJECT_ID = 'workshop-20211106'
const REACT_APP_FIREBASE_STORAGE_BUCKET = 'workshop-20211106.appspot.com'
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = '431963415884'
const REACT_APP_FIREBASE_APP_ID = '1:431963415884:web:a1cd53b5ddce9dbb7b5be9'

export const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
}


firebase.initializeApp(firebaseConfig)
// export default firebase;

const database = firebase.database()
export const messagesRef = database.ref('messages')

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text })
}
export const auth = firebase.auth();

