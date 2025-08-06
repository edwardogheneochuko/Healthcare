'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/utils/firebase'; ;
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Gym from '../global/Gym';
import Socials from '../global/Socials';

interface LoginProps {
  setIsLogin: (value:boolean) => void;
}

// ✅  Define the validation schema with Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// ✅  Type for the form values
export type LoginFormValues = z.infer<typeof loginSchema>; 

const inputStyles = 'border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white'

// ✅ main Page
const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  // Initialize react-hook-form with zod validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: LoginFormValues) {
    console.log(values)

    try {
      // const result = await loginUser(values);
      // if (result.success) {
      //   toast.success("Success!", {
      //     description: result.message,
      //   });
      //   // Optional: redirect to login page
      //   router.push("/dashboard");
      // } else {
      //   toast.error("Error", {
      //     description: result.message,
      //   });
      // }
    } catch (error) {
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
      console.log(error);
    } finally {
    }
  }


  const GoogleLogin = async () => {
    if (loading) return
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in:', result.user);
      router.push('/dashboard');
      
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        alert('Sign-in popup closed before completion.');
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.warn('Sign-in popup request was cancelled.');
      } else {
        console.error('Error signing in with Google:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
       {/* ✅ reusable */}
     <Gym />
      <div className='flex flex-col gap-4'>
        <h2 className='text-left font-bold text-white text-2xl py-2'>Log in</h2>
        <Socials />
 <div className='flex items-center gap-4'>
  <span className='flex-1 h-px bg-gray-300'></span>
  <span className='text-gray-500'>or</span>
  <span className='flex-1 h-px bg-gray-300'></span>
 </div>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 mt-5'>
        <label className='text-white text-lg' >Email</label>
        <input type="text" {...form.register('email')} placeholder='your-email@gmail.com' 
        className={inputStyles}/>
        <span className='flex justify-between'>
        <label className='text-white text-lg'>Password</label>
        <Link href='/forgot-password' className='text-sm text-red-300'>Forgot Password</Link>
        </span>
        <input type="password" {...form.register('password')}
         placeholder='-------' className={inputStyles} />
        <button type='submit' className='text-black w-full py-4 rounded-4xl text-lg
        bg-neutral-300 hover:bg-white cursor-pointer duration-200'>
          Log in
        </button>
        <div className="text-center text-gray-50 ">
          I don't have an account ?{' '}
          <Link href={'/signup'}
           className="text-blue-400 font-medium cursor-pointer">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;