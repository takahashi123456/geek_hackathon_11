import { getAuth, signInWithRedirect, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { firebaseConfig } from "../firebase"
import firebase from 'firebase/compat/app'
import { Link } from 'react-router-dom'


firebase.initializeApp(firebaseConfig)

const provider = new GithubAuthProvider();
const auth = getAuth();

signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
    });



const Login = () => {
    return (
        <>
            {signInWithPopup}

        </>
    )
}

export default Login;