import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfic";
import useAxiosPublic from "../hooks/useAxiosPublic";


 export const AuthContext = createContext()

 const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()
    const createUser = (email,password) => {
        setLoading(true)

       return  createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleSignin = () => {
        setLoading(true);

        return signInWithPopup(auth,googleProvider)


    }

    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
        })
          
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);

            if(currentUser){
                // get token and store client
                    const userInfo = {email:currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res  => {
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                    }

                })

            }

            else{

                localStorage.removeItem('access-token')



             }
           
            setLoading(false);

        })
        return () => {
            return unsubscribe;
        }


    }, [axiosPublic])

  






    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        updateUserProfile,
        googleSignin


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;