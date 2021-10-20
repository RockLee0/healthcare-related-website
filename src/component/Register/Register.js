import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Register = () => {
   const {handleRegitration,handleChangeEmail,handlePassword}=useFirebase();
    return (
        <div>
            <form onSubmit={handleRegitration}>
      <div className=' mb-3 '> <h1 className='text-bold text-black'> Please  Register </h1> </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-8">
      <input required onBlur={handleChangeEmail} type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-8">
      <input required onBlur={handlePassword} type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <label className="form-check-label" htmlFor="gridCheck1">
        <Link className="text-black fs-3" to="/LogIn">  Already Have account? </Link>
        </label>
      </div>
    </div>
  </div>
  <div className='row mb-3 text-danger'>{Error}</div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
        </div>
    );
};

export default Register;