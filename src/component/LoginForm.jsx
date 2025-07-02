import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './Button'
import FloatingLabelInput from './FloatingLabelInput'
import { login } from '../utils/authService'
import LoadingSpinner from './base/LoadingSpinner'

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData.email, formData.password);
            setIsLoading(true);
            if (result.success) {
                navigate('/');
                setIsLoading(false);
            } else {
                alert(result.message || 'Login failed');
                navigate('/login');
            }
        } catch (error) {
            alert('An error occurred during login.');
        }
    }

    return (
        <div className='mt-10 py-6 px-10 text-primary font-inter w-full'>
            <LoadingSpinner loading={isLoading} text="Logging in..." />
            <h2 className='text-xl sm:text-5xl font-bold pb-4'>Login</h2>
            <p className='text-sm sm:text-sm font-extralight'>Login to access your Travelwise account</p>

            <form action="" method="post" className='py-8 sm:py-10' onSubmit={handleSubmit}>
                <div className='pb-3'>
                    <FloatingLabelInput
                        type='email'
                        id='email'
                        label='EMAIL'
                        placeholder=' '
                        inputClassName=''
                        labelClassName=''
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className='pt-3'>
                    <FloatingLabelInput
                        type='password'
                        id='password'
                        label='PASSWORD'
                        placeholder=' '
                        inputClassName=''
                        labelClassName=''
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                </div>

                {/* remember me and forgot password section */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-y-2'>
                    <div className='flex items-center'>
                        <input
                            id="remember_me"
                            type="checkbox"
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary focus:ring-2"
                            checked={formData.rememberMe}
                            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                        />
                        <label
                            htmlFor="remember_me"
                            className="ml-2 text-sm font-medium text-primary cursor-pointer"
                        >
                            Remember me
                        </label>
                    </div>

                    <NavLink
                        to="/forgot-password"
                        className='text-sm text-red-600 cursor-pointer'>
                        Forgot Password
                    </NavLink>
                </div>

                <Button text="LOGIN" type='submit' />
            </form>

            <div className='flex justify-center items-center gap-x-1 *:text-sm'>
                <p>Don't have an account?</p>
                <NavLink
                    to="/signup"
                    className="text-red-600 font-semibold hover:underline"
                >
                    Sign Up
                </NavLink>
            </div>
        </div>
    )
}

export default LoginForm
