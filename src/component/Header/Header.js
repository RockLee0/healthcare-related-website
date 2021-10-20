import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';

const Header = () => {
  const {user,LogOut}=useFirebase();

    return (
        <div className="bg-black">

    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/Home"  className="nav-link active">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/LogIn" className="nav-link">Log In </Link>
  </li>
  <li className="nav-item">
    <Link to="/Register" className="nav-link">Register</Link>
  </li>
  <li className="nav-item">
    <Link to="/VisitingInfo" className="nav-link">Visiting Info</Link>
  </li>
  <li className="nav-item">
    <Link to="/About" className="nav-link">About</Link>
  </li>
  <li className="nav-item">
  {user?.email && <span className="text-primary mt-5">{user.displayName}</span>} 
  </li>

  <li className="nav-item">
  {user?.email && <button className="p-1 m-1 border rounded" onClick={LogOut} >Log Out</button>}
  </li>
</ul>

        </div>
    );
};

export default Header;