import React from 'react';

const Login = () => {
    return (
        <div className='flex'>
            <div className='w-3/2'>

            </div>
            <div className='w-'>
                <div>
                <h1 className='text-sm'>need help?</h1>
                </div>
                <div>
                    <h1>Log in</h1>
                </div>
                <div>
                    <form>
                        <h1>Email</h1>
                        <input type="email" name="email" id="" />
                        <h1>Password</h1>
                        <input type="password" name="password" id="" />
                    </form>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;