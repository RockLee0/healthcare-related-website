import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div>
                <input className="px-5" type="text" placeholder=" What do you want to know? " />
                <button className="px-3 mx-1" type="submit">results</button>
            </div>

           <div className="my-3">
               <h4>Our growth rate:</h4>
           <div className="progress w-75 mx-auto">
  <div className="progress-bar w-75 bg-primary" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
</div>
           </div>


        </div>
    );
};

export default Home;