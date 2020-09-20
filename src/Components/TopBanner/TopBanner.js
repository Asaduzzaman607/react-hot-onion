import React from 'react';
import Navbar from '../Navbar/Navbar';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="container-fluid top-banner">
            {/* <Navbar></Navbar> */}
            <div>
                <h2>Best food waiting for your stomach</h2>
                
            </div>
            <div className="search-form">
            <input type="text" placeholder='Search Food Items' className='form-control' />
            <button className="search-button">Search</button>
            </div>

            
        </div>
    );
};

export default TopBanner;