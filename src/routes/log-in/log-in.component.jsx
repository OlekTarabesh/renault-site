import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.js';
// import SignUpForm from '../../components/sign-up/sign-up-form.component.jsx';
import './log-in.styles.css'

const LogIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = createUserDocumentFromAuth(user);
    }
    return (
        <button className='sign-in' onClick={logGoogleUser}>Sign In With Google Popup</button>
    )
}

export default LogIn;