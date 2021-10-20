import React from 'react';

const ServiceDetail = (props) => {
    const {Doctor,Description,ContactNumber}=props.doctor;
    return (
        <div>
            Name : {Doctor}
            Description: {Description}
            ContactNumber: {ContactNumber}
        </div>
    );
};

export default ServiceDetail;