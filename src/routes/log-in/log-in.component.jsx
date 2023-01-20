import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.js';
import './log-in.styles.css'

const LogIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = createUserDocumentFromAuth(user);
    }
    return (
        <div className="log-in-wrapper">
            <h1 className="log-in">You should LOG IN!!!</h1>
            <button className='sign-in' onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
}

export default LogIn;