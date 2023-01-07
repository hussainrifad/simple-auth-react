import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex justify-around'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;