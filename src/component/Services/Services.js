import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Services = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('./tools.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <h1 className='container mx-auto text-center border border-secondary rounded fw-light fs-1 p-3'>Our all Doctors</h1>
            <div className='container mx-auto my-2 row row-cols-3'>
            {
                doctors.map(doctor=><Card doctor={doctor} key={doctor.id}></Card>)
            }
            </div>

            
        </div>
    );
};

export default Services;