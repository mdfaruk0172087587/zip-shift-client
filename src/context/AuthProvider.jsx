import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

//    register
const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password);
}

// update user
const updateUser = (data) => {
    setLoading(true)
    return updateProfile(auth.currentUser, data)
}

// signin
const signIn = (email, password) =>{
    setLoading(signIn)
    return signInWithEmailAndPassword(auth, email, password);
}

// google login
const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// logOut
const logOut = () => {
    setLoading(true)
    return signOut(auth);
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        registerUser,
        signIn,
        logOut,
        updateUser,
        googleLogin

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;