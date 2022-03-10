import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCui4BVLB1-ODkyntg8X2bU09TW_m5Fxe0",
  authDomain: "storage-firebase-app-63447.firebaseapp.com",
  projectId: "storage-firebase-app-63447",
  storageBucket: "storage-firebase-app-63447.appspot.com",
  messagingSenderId: "239104825659",
  appId: "1:239104825659:web:b78cd75aeb779d45457f1e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { db, auth, provider, storage };
