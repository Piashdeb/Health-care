import { useState } from "react"
import InitializeAuth from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

InitializeAuth();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, provider)
        .theb(result => {
            console.log(result.user);
            setuser(result.user);
        } )
        .catch(error => {
            seterror(error.massage);
        })
    }
    return{
        user,
        error,
        signInUsingGoogle
    }

}

export default useFirebase;