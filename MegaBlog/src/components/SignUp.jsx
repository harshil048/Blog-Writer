import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authservice from '../appwrite/auth'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("")
    try {
      const userData = await authservice.createAccount(data);
      if (userData) {
        const userData = await authservice.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        }
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg text-[#040D12] bg-[#5C8374] rounded-xl p-10 shadow-xl border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-3xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-4 mb-3 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-bold text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Input
              label="Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your Email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              label="Password: "
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type='submit' className='w-full text-[#e2e6e6] bg-[#040D12]'>Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp