import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrDK_6XXOwHAkoqmyGS278jAY6krq0JJM",
  authDomain: "counter-9d5a3.firebaseapp.com",
  projectId: "counter-9d5a3",
  storageBucket: "counter-9d5a3.appspot.com",
  messagingSenderId: "155109266468",
  appId: "1:155109266468:web:d0311261320237fc7f74b1",
  measurementId: "G-H8LLDYRMJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name || '');
      localStorage.setItem("email", email || '');
      localStorage.setItem("profilePic", profilePic || '');
    })
    .catch((error) => {
      console.log(error);
    });
};



// export const db = getFirestore(app)
