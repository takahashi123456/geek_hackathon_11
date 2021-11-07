import Top from '../components/Top';
import SignUp from "./signup/index"
import { getAuth, signInWithRedirect, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { AuthProvider } from './login/index';

const provider = new GithubAuthProvider();

export default function Home() {
  return (
    <>
      <Top />
      <AuthProvider>
        <div style={{ margin: '2em' }}>
          <SignUp />
        </div>
      </AuthProvider>
      <a
        href="/login_github"
      >GithubでLogin</a>
      {/* <Login /> */}
    </>
  )
}
