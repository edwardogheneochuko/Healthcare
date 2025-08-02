'use client';

import React, { useState } from 'react';

// ✅ form validation
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import Gym from '../global/Gym';

// ✅ notification, icons, and router
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { registerUser } from '@/actions/users';

// ✅ Define the validation with schema
const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

// ✅ Type for the form values
export type RegisterFormValues = z.infer<typeof registerSchema>;
const inputStyles = 'border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white ';

// ✅ main page
const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // ✅ Initialize react-hook-form with zod validation
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    console.log(data);
    toast.info('Processing Info');
    setIsSubmitting(true);
    form.reset(); // 👈 Clears the input fields

    // ... handle form registration here
    try {
      const result = await registerUser(data);
      console.log("Creating user with data:", data);

      if (result.success) {
        toast.success("Success!", { description: "Account has been created" });
        router.push("/dashboard");
      } else {
        toast.error("Error", { description: result.error || "Unknown error" });
        console.error("Signup failed:", result.error);
      }
    } catch (error) {
      toast.error("Error", { description: "Something went wrong. Please try again." });
      console.error("Unexpected signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const GoogleSignup = async () => {
    setError('');
    setLoading(true);
    toast.success("Processing your request...");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('User signed up:', result.user);
      router.push('/dashboard');
    } catch (err: any) {
      setError('Google signup failed.');
    } finally {
      setLoading(false);
    }
  };

  // Password input field with visibility toggle
  const PasswordInput = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State to track visibility

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    return (
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle between password and text
          placeholder="Password"
          {...form.register("password")}
          className={inputStyles}
        />
        {/* Eye icon to toggle visibility */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          {passwordVisible ? (
            <svg
              className="w-10 h-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12c0 3-2.25 5.25-5 5.25S5 15 5 12s2.25-5.25 5-5.25 5 2.25 5 5.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 17.657a9.969 9.969 0 01-3.9 2.687c-.635.206-1.287.343-1.957.343a9.969 9.969 0 01-5.823-1.89m4.708-4.707a9.969 9.969 0 01-2.436 3.9"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12c0 3-2.25 5.25-5 5.25S5 15 5 12s2.25-5.25 5-5.25 5 2.25 5 5.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.5 11.5a9.969 9.969 0 01-.736 3.174l-1.314-1.314A4.96 4.96 0 0015 12a4.963 4.963 0 00-2.84-.867L15.5 11.5z"
              />
            </svg>
          )}
        </button>
      </div>
    );
  };

  return (
    <div className='text-white'>
      <Gym />
      <div>
        {isOpen ?
          <form onSubmit={form.handleSubmit(onSubmit)} className='text-lg space-y-3'>
            <label>FirstName</label>
            <input
              type="text"
              {...form.register("firstName")}
              placeholder='First Name' className={inputStyles}
            />
            {form.formState.errors.firstName && (
              <p className='text-red-500 text-sm'>{form.formState.errors.firstName.message}</p>
            )}
            <label>LastName</label>
            <input
              type="text"
              {...form.register("lastName")}
              placeholder='Last Name' className={inputStyles}
            />
            {form.formState.errors.lastName && (
              <p className='text-red-500 text-sm'>{form.formState.errors.lastName.message}</p>
            )}
            <label>Email</label>
            <input
              type="text"
              {...form.register("email")}
              placeholder='your@example.com' className={inputStyles}
            />
            {form.formState.errors.email && (
              <p className='text-red-500 text-sm'>{form.formState.errors.email.message}</p>
            )}
            <label>Password</label>
            <PasswordInput />
            {form.formState.errors.password && (
              <p className='text-red-500 text-sm'>{form.formState.errors.password.message}</p>
            )}
            <button
              type='submit'
              className='text-black w-full py-4 rounded-4xl text-lg bg-neutral-300 hover:bg-white cursor-pointer duration-200'
            >
              Create Account
            </button>
            <p onClick={() => setIsOpen(false)} className='text-center text-gray-600 cursor-pointer'>Back</p>
          </form>
          :
          <div className='flex flex-col gap-4 mt-3'>
            <h1 className="text-2xl font-bold mb-2 text-left">Sign up</h1>
            <button
              disabled={loading}
              className="w-full bg-neutral-200 hover:bg-white duration-200 text-black border rounded-4xl text-lg
              border-gray-300 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60 cursor-pointer"
            >
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
              {loading ? 'Processing...' : 'Sign up with Google'}
            </button>
            <div className='flex items-center gap-4'>
              <span className='flex-1 h-px bg-gray-300'></span>
              <span className='text-gray-500'>or</span>
              <span className='flex-1 h-px bg-gray-300'></span>
            </div>
            <button onClick={() => setIsOpen(true)} 
              className='w-full bg-black hover:bg-neutral-900 duration-200 border rounded-4xl text-lg
              border-gray-800 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60 cursor-pointer text-white'>
              Continue with email
            </button>
          </div>
        }
      </div>
      <div className="mt-6 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 ">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUp;
