import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import img from '../utilites/image1.png';


const Login = () => {

    const {signInByEmailandPassword} = useContext(AuthContext);

    const handleUseLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        signInByEmailandPassword(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error))
    }


    return (
        <div className='p-10 md:p-20 md:mt-10 md:px-60'>
        <div className='flex flex-col-reverse md:flex-row border shadow-xl'>
            <div className='invisible md:w-1/2 md:visible w-0'>
            <img src={img} className='' />
            </div>
            <div className='md:w-1/2'>
                <div className='mt-1 mr-1'>
                <h1 className='text-sm text-right'>need help?</h1>
                </div>
                <div className='mt-10 ml-10'>
                    <div className='text-center'>
                    <h1 className='text-lg font-semibold'>Log in</h1>
                    </div>
                    <div className='my-3'>
                    <form onSubmit={handleUseLogin}>
                        <h1 className='my-1'>Email</h1>
                        <input className='border w-2/3 rounded-lg h-10' type="email" name="email" id="" />
                        <h1 className='my-1'>Password</h1>
                        <input className='border w-2/3 rounded-lg h-10' type="password" name="password" id="" />
                        <div className='text-center'>
                    <button className='w-1/2 bg-green-700 mt-7 py-2 rounded-lg'>Login</button>
                    </div>
                    </form>
                    
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Login;