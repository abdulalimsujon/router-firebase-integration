import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);



const LoGin = () => {
    const [signInwithGoogle, user] = useSignInWithGoogle(auth);
    return (

        <div >
            <h3>Please Login</h3>

            <button onClick={() => signInwithGoogle()}>google sign in</button>
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



