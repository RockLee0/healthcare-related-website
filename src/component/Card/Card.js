import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props ) => {
    const {img,Description, Doctor}=props.doctor;
    const [doctorInfo,setDoctorInfo]=useState({});
     const doctor=()=>{
        setDoctorInfo(props);
    }

    return (
        <div>

<div className='h-100 p-2 bg-light bg-gradient border border-secondary rounded col'>
          <div>
          <img className='w-100 h-100 img-fluid' src={img} alt="..."/>
          </div>
          
          <div className='p-2 mt-2'>
          <h3 className="fw-bold py-3">{Doctor}</h3> 
          <h4>Description :{Description}</h4>
          <Link to="/ServiceDetail">
              <button doctor={doctor}>See Details</button>
          </Link>
          
          

          </div>

      </div>
            
        </div>
    );
};

export default Card;