import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn(); 
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        if(user != null){
            navigate('/account');
        }
    }, [user])

    return (
        <div>
            <h1 className = 'Signin'>Sign In</h1>
            <div className = 'GoogleButton'>
                <GoogleButton onClick = {handleGoogleSignIn}/>
            </div>
        </div>
    );
}

export default Signin;