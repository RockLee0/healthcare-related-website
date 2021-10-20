import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,getAuth,onAuthStateChanged ,signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [IsLogIn, setIsLogIn]=useState('true');

    const gooleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignInMethod=()=>{
    
        signInWithPopup(auth,gooleProvider)
        .then(result=>{
            setUser(result.user);
            console.log(result.user)
        })
        .catch(error=>{
            setError(error.messege);
        })
            

    }
    const LogOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({});

        }).catch(error=>{
            setError(error.messege);
        })
    }

    //  password login 
    const handleRegitration=e=>{
        console.log(Email,Password);
        e.preventDefault();
        if(Password.length<6)
        {
          setError('Password must be at least six character');
          return;
        }
      
        IsLogIn ? processLogIn (Email,Password) : registerNewUser(Email,Password);
      
        
      
      }
      
      const processLogIn=(Email,Password)=>{
        signInWithEmailAndPassword (auth, Email, Password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          setError('');
        })
        .catch(error=>{
          setError(error.message);
        })
      
      
      }
      
      const registerNewUser=(Email,Password)=>{
      
        createUserWithEmailAndPassword(auth, Email, Password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          setError('');
        })
        .catch(error=>{
          setError(error.message)
        })
       
      }
      
      
      const handleChangeEmail=e=>{
        setEmail(e.target.value);
      }
      
      const handlePassword=e=>{
        setPassword(e.target.value);
      }
      
      
    // finished
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user)
            {
                console.log('inside state change',user)
                setUser(user);
            }
        })
    },[])

    return {
        user, error,LogOut,IsLogIn,
        googleSignInMethod,handleRegitration,handleChangeEmail,handlePassword
    }

}
export default useFirebase;