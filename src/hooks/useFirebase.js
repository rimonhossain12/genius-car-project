import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();



const useFirebase = () => {
    const [user, setUsers] = useState({});
    const [isLoading, SetIsLoading] = useState(true);
    const auth = getAuth();
    const singInUsingGoogle = () => {
        SetIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })
            .finally(() => SetIsLoading(false))
            ;
    }
    // observed use state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({})
            }
            SetIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        SetIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => SetIsLoading(false))
            ;
    }


    return {
        user,
        singInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;