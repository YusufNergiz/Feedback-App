import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='home-div'>
            <div>
                <h1 className='home-div-button'>Leave a Review!</h1>
                <div className="box-2">
                    <Link to='/feedback'>
                        <div className="btn btn-two">
                            <span>Get Started</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;