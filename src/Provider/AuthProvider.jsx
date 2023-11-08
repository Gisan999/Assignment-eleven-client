/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedEmail = { email: userEmail };
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {
                axios.post('http://localhost:5000/api/v1/auth/jwt', loggedEmail, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/api/v1/logout', loggedEmail, {
                    withCredentials: true
                })
                .then( res => console.log(res.data))
            }
        })
        return () => {
            unSubscribe();
        }
    }, [user?.email])

    const authInfo = {
        user,
        setLoading,
        loading,
        registerUser,
        logIn,
        logOut,
        userUpdate,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;