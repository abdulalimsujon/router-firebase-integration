import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please register now</h3>
            <form >
                <input type="text" placeholder='your name' />
                <br />
                <input type="email" placeholder='your mail' />
                <br />
                <input type="password" placeholder='your password' />
                <br />
                <input type="submit" value='register' />
            </form>
        </div>
    );
};

export default Register;