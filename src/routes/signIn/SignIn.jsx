import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utils";

const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
  }

  return(
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SignIn With Google</button>
    </>
  )
}

export default SignIn;