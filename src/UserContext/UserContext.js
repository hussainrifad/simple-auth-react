import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';

// creating userContext 

const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()
    const githubProvider = new GithubAuthProvider();
    

    // ----------------------- creating email and password signIn system ------------------

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInByEmailandPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // ---------------------- social media signIn --------------------

    const signInByFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const signInByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const SignInByGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // all authInfo passing to the child component 

    const authInfo = {signInByGoogle, SignInByGithub, signInByFacebook, createUser, signInByEmailandPassword};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;