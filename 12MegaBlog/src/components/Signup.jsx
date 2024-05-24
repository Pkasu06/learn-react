import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import Logo from './Logo';
import Input from './Input';
import Button from './Button';

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const create = async(data) => {
        setError("")
        setLoading(true)
        try {
            const session = await authService.createAccount(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(login(userData));
                setLoading(false);
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10'>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%'/>
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account? &nbsp;
                    <Link to="/login" className='font-medium text-primary transition-all duration-200 hover:underline'>
                        Login
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(create)} className='mt-8'>
                    <div className='space-y-5'>
                         <Input label="Email: " placeholder="Enter your email" type="email" {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                         })}/>
                         <Input label="Password:" type="password" placeholder="Enter password" {...register("password", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ||
                                "password doesnt meet the required criteria: atleast 8 characters, must contain atleast  1uppercase letter, 1 lowercase letter, 1 number, can contain specia charcaters",
                            }
                         })}/>
                         <Button type='submit' className='w-full'>Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup