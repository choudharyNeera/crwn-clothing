import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByT2AI_0Us_5qXUAMCTafjbRej7C304LA",
  authDomain: "crwn-clothing-db-78bf9.firebaseapp.com",
  projectId: "crwn-clothing-db-78bf9",
  storageBucket: "crwn-clothing-db-78bf9.appspot.com",
  messagingSenderId: "338262830903",
  appId: "1:338262830903:web:71b96671b8ccac2d2c34b2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users',userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log("error creating user", error.message);
    }
  }
}
