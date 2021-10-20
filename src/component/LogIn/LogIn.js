import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const LogIn = () => {
    const {googleSignInMethod,error}=useFirebase();

    return (
        <div className="my-3 bg-white">
            <h2 className="mb-2"> Please Log In</h2>
           <button onClick={googleSignInMethod} type='submit'> Google Sign In</button>
           <br />
           <Link to="/Register" className="fs-2 my-2"> Don't have an account? </Link> 
           <h4> Note: {error}</h4>
        </div>
    );
};

export default LogIn;