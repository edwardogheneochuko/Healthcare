'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/utils/firebase'; ;
import { Dumbbell } from 'lucide-react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

interface LoginProps {
  setIsLogin: (value:boolean) => void;
}

// Define the validation schema with Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Type for the form values
export type LoginFormValues = z.infer<typeof loginSchema>; 

const inputStyles = 'border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white'

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
    setIsLoading(true);
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
      setIsLoading(false);
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
      <h1 className='text-white flex flex-col items-center gap-1'>
            <Dumbbell  size={60} className='text-red-200 '/>
      <p className='text-xl tracking-widest font-bold duration-200 hover:scale-110 '>
         Gy<span className='text-2xl'>M</span>it
      </p>
      </h1>
      <div className='flex flex-col gap-4'>
        <h2 className='text-left font-bold text-white text-2xl py-2'>Log in</h2>
        <button
  onClick={GoogleLogin}
  disabled={loading}
  className="w-full bg-neutral-200 hover:bg-white duration-200 text-black border rounded-4xl text-lg
   border-gray-300 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60
   cursor-pointer">
  {/* Google SVG Icon */}
  <svg
    className="w-5 h-5"
    viewBox="0 0 488 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#EA4335"
      d="M488 261.8c0-17.4-1.5-34.1-4.3-50.3H249v95.2h135.6c-5.8 31.4-23 58-48.9 75.9v62.9h78.9c46.2-42.6 73.4-105.4 73.4-183.7z"
    />
    <path
      fill="#34A853"
      d="M249 492c65.7 0 120.7-21.7 160.9-59.1l-78.9-62.9c-21.9 14.6-50 23.2-82 23.2-62.9 0-116.2-42.5-135.2-99.6H32.9v62.6C73.6 439.2 155.4 492 249 492z"
    />
    <path
      fill="#4A90E2"
      d="M113.8 293.6c-6.4-19-10-39.3-10-60.1s3.6-41.1 10-60.1V110.9H32.9C11.8 151.3 0 198.6 0 245.5s11.8 94.2 32.9 134.6l80.9-63.1z"
    />
    <path
      fill="#FBBC05"
      d="M249 97.6c35.8 0 67.9 12.3 93.3 36.4l70.1-70.1C369.6 25.6 314.7 0 249 0 155.4 0 73.6 52.8 32.9 110.9l80.9 62.6c19-57.1 72.3-99.6 135.2-99.6z"
    />
  </svg>
  {loading ? 'Processing...' : 'Log in with Google'}
</button>
 <div className='flex items-center gap-4'>
  <span className='flex-1 h-px bg-gray-300'></span>
  <span className='text-gray-500'>or</span>
  <span className='flex-1 h-px bg-gray-300'></span>
 </div>
      </div>
      <div className='space-y-4 mt-5'>
        <label className='text-white text-lg'>Email</label>
        <input type="text" placeholder='your-email@gmail.com' 
        className={inputStyles}/>
        <label className='text-white text-lg'>Password</label>
        <input type="text" placeholder='-------' className={inputStyles} />
        <button className='text-black w-full py-4 rounded-4xl text-lg
        bg-neutral-300 hover:bg-white cursor-pointer duration-200'>
          Log in
        </button>
        <div className="text-center text-gray-50 ">
          I don't have an account ?{' '}
          <Link href={'/signup'}
           className="text-blue-400 font-medium hover:underline cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;