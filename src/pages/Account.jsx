import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {

    const{logOut, user} = UserAuth();

    const handleSignOut = async () => {
        try{
            await logOut()
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className = "AccountDiv">
            <h1 className = "AccountText">Account</h1>
            <p className = "WelcomeText">Welcome, {user?.displayName}</p>
            <button onClick= {handleSignOut} className = "LogoutButton">Logout</button>
        </div>
    );
}

export default Account;