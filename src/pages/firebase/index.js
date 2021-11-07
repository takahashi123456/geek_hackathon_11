import firebase from 'firebase';
import { firebaseConfig } from '../firebase';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase;