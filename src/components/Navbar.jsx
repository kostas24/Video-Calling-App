import React from 'react';
import { Link } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Navbar = () => {
    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try{
            await logOut()
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className = 'Navbar'>
            <h1 className = 'header-text'>
                Video Calling App
            </h1>
            {user?.displayName ? ( 
                <button className = "logoutButtonNav" onClick={handleSignOut}>Logout</button> 
                ):( <Link className = "SignInRedirect" to ='/signin'>
                        <button className = "logoutButtonNav">
                            Sign in
                        </button>
                    </Link>)}


        </div>
    );
}

export default Navbar;