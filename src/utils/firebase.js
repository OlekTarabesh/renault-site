import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmXoUnj3D3ji5MObvd-lCXpw8q-Th6FWE",
    authDomain: "pet-renault-db.firebaseapp.com",
    projectId: "pet-renault-db",
    storageBucket: "pet-renault-db.appspot.com",
    messagingSenderId: "50427238071",
    appId: "1:50427238071:web:87628dbf1d9864700e9f32"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    //IF USER DATA DOES NOT EXISTS
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

    //if we get document, we need set document
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt, 
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        } 
    };

    //IF USER DATA EXISTS WE JUST RETURN userDocRef
    return userDocRef;
  }; 

//   git commit -m 'My first commit. Already added firebase auth with signInWithPopup and after sign in we set document in dataBase.'