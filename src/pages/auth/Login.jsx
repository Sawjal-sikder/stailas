import React from 'react';
import Image from '../../component/Image';
import LoginForm from '../../component/LoginForm';
import LoginImage from '../../assets/image/Rectangle 20.png';
import Logo from '../../assets/logo/logo.png';

const Login = () => {
    return (
        <div className="px-6 py-10 md:px-16 lg:px-28 bg-white min-h-screen flex">
            <div className="flex justify-between gap-x-12 w-full">

                {/* Left Side (Form) */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center items-start">
                    <Image src={Logo} alt="Logo" className="w-32 pb-8" />
                    <LoginForm />
                </div>

                {/* Right Side (Image) */}
                <div className="hidden lg:flex w-full lg:w-3/5 justify-center">
                    <Image src={LoginImage} alt="Login Image" className="w-full" />
                </div>

            </div>
        </div>
    );
};

export default Login;
