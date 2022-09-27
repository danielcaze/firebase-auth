import { useContext, useState, createContext, useEffect } from "react";
import { auth } from '../firebase'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        forgotPassword,
        updateEmail,
        updatePassword
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function forgotPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePasssword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
