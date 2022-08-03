import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';

const auth = getAuth(app);



const LoGin = () => {
    const [signInwithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    const hundleGoogleSignIn = () => {
        signInwithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (

        <div >
            <h3>Please Login</h3>

            <button onClick={hundleGoogleSignIn}>google sign in</button>
            <br />

            <input type="email" placeholder='your mail' />
            <br />
            <input type="password" placeholder='your password' />
            <br />
            <input type="submit" value='Login' />

        </div>
    );
};

export default LoGin;



