import React from 'react';
import Image from '../../component/Image';
import LoginForm from '../../component/LoginForm';
import LoginImage from '../../assets/image/Rectangle 20.png';
import Logo from '../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="px-6 py-20 md:px-16 lg:px-40 bg-white flex">
            <div className="flex justify-between gap-x-36 w-full">

                {/* Left Side (Form) */}
                <div className="w-full lg:w-5/12 flex flex-col">
                    <NavLink to={"/"}>
                        <Image src={Logo} alt="Logo" className="w-64 pb-10 ps-10" />
                    </NavLink>
                    <LoginForm />
                </div>

                {/* Right Side (Image) */}
                <div className="hidden lg:flex w-full lg:w-7/12 justify-center">
                    <Image src={LoginImage} alt="Login Image" className="w-full" />
                </div>

            </div>
        </div>
    );
};

export default Login;
