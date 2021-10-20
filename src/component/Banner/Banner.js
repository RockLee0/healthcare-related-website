import React from 'react';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-inner">
           <div className="carousel-item active" >
               <div className="w-100 p-3 h-100 mx-auto">
               <img src="https://media.istockphoto.com/photos/portrait-of-middle-aged-asian-female-doctor-standing-in-hospital-picture-id1271328839?b=1&k=20&m=1271328839&s=170667a&w=0&h=SIMzwoe8eu43OoY4M3ElZCMxW9MgDbZbVzMhh4VY2zM=" className="d-block w-100" alt="..."/>
               </div>
           <div className="carousel-caption d-none d-md-block text-black">
            <h5 className="fs-1">Welcome to <span className="text-primary">HealthCare</span></h5>
            <p className="fs-3">We are here to protect you. We are available 24/7 only for you.</p>
           </div>
            </div>   
           </div>
            </div>
        </div>
    );
};

export default Banner;