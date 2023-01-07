import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center '>
            <div className='mx-10'>
                <button> <Link to='/login'>Login</Link></button>
            </div>
            <div className='mx-10'>
                <button> <Link to='/register'>Register</Link></button>
            </div>
        </div>
    );
};

export default Home;