import React from 'react';

const NotFound = () => {
    return (
        <div  className='App bg-black bg-gradiant'>
            <div className='bg-white border border-black p-4 mx-auto text-center w-25 rounded'>
                <h1 className='text-danger'>Page Not Found</h1>
                <h4>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</h4>
                <a href="www.google.com">Blak to our site </a>
                <hr />
                <h5>If this is your site.and you weren't expecting a 404 for this path, please visit again.</h5>
            </div>
            
        </div>
    );
};

export default NotFound;