import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../Hooks/useFirebase';

const PrivateRoute = ({children,...rest}) => {
    const {user}=useFirebase();
    return (
        <Route
        {...rest}
        render={({location})=> user.email ?
    children : 
    <Redirect 
         to= {{
             pathname:'/LogIn',
             state: {from: location}
         }}
         ></Redirect>

}
        >
            
        </Route>
    );
};

export default PrivateRoute;