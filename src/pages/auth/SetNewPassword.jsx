import React from 'react';
import Image from '../../component/Image';
import LoginImage from '../../assets/image/Rectangle 24.png';
import Logo from '../../assets/logo/logo.png';
import NewPasswordForm from '../../component/NewPasswordForm';
import { NavLink, useLocation } from 'react-router-dom';

const SetNewPassword = () => {
    const location = useLocation();
    const { email, otp_code } = location.state || {};
    return (
        <div className="px-6 py-20 md:px-16 lg:px-40 bg-white flex">
            <div className="flex justify-between gap-x-36 w-full">

                {/* Left Side (Form) */}
                <div className="w-full lg:w-5/12 flex flex-col">
                    <NavLink to={"/"}>
                        <Image src={Logo} alt="Logo" className="w-64 pb-20 ps-10" />
                    </NavLink>
                    <NewPasswordForm email={email} otp_code={otp_code} />
                </div>

                {/* Right Side (Image) */}
                <div className="hidden lg:flex w-full lg:w-7/12 justify-center">
                    <Image src={LoginImage} alt="Login Image" className="w-full" />
                </div>

            </div>
        </div>
    );
};

export default SetNewPassword
