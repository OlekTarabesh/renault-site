//for trackin our inputs we need to use useState
import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import LogIn from '../../routes/log-in/log-in.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);
    //clear up form fields after log in.
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('This email and password already in use!')
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="sign-up-form-wrapper">
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <h4 className="sign-up-form-title">Registration</h4>
                    <label className="sign-up-form-lable">Display Name</label>
                    <input className="sign-up-form-input" type="text" required onChange={changeHandler} name="displayName" value={displayName} />

                    <label className="sign-up-form-lable">Email</label>
                    <input className="sign-up-form-input" type="email" required onChange={changeHandler} name="email" value={email} />

                    <label className="sign-up-form-lable">Password</label>
                    <input className="sign-up-form-input" type="password" required onChange={changeHandler} name="password" value={password} />

                    <label className="sign-up-form-lable">Confirm Password</label>
                    <input className="sign-up-form-input" type="password" required onChange={changeHandler} name="confirmPassword" value={confirmPassword} />
                    <div className="button-wrapper">
                        <button className="submit button1" type="submit">Sign In</button>
                        <LogIn className="submit-with-google button-google"/>
                    </div>
                </form>
        </div>
    );
};

export default SignUpForm;