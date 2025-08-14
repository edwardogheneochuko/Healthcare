'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import Gym from '../global/Gym';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { registerUser } from '@/actions/users';

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

export type RegisterFormValues = z.infer<typeof registerSchema>;
const inputStyles = 'border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white ';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    toast.info('Processing Info');
    setIsSubmitting(true);

    try {
      const result = await registerUser(data);

      if (result.success) {
        toast.success("Success!", { description: "Account has been created" });
        router.push("/dashboard");
      } else {
        toast.error("Error", { description: result.error || "Unknown error" });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error("Error", { description: err.message });
      } else {
        toast.error("Error", { description: "Something went wrong. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
      form.reset();
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
    } catch {
      setError('Google signup failed.',);
    } finally {
      setLoading(false);
    }
  };

  const PasswordInput = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          {...form.register("password")}
          className={inputStyles}
        />
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          {passwordVisible ? '🙈' : '👁️'}
        </button>
      </div>
    );
  };

  return (
    <div className='text-white'>
      <Gym />
      <div>
        {isOpen ? (
          <form onSubmit={form.handleSubmit(onSubmit)} className='text-lg space-y-3'>
            <label>First Name</label>
            <input type="text" {...form.register("firstName")} placeholder='First Name' className={inputStyles} />
            {form.formState.errors.firstName && <p className='text-red-500 text-sm'>{form.formState.errors.firstName.message}</p>}

            <label>Last Name</label>
            <input type="text" {...form.register("lastName")} placeholder='Last Name' className={inputStyles} />
            {form.formState.errors.lastName && <p className='text-red-500 text-sm'>{form.formState.errors.lastName.message}</p>}

            <label>Email</label>
            <input type="text" {...form.register("email")} placeholder='your@example.com' className={inputStyles} />
            {form.formState.errors.email && <p className='text-red-500 text-sm'>{form.formState.errors.email.message}</p>}

            <label>Password</label>
            <PasswordInput />
            {form.formState.errors.password && <p className='text-red-500 text-sm'>{form.formState.errors.password.message}</p>}

            <button
              type='submit'
              disabled={isSubmitting}
              className='text-black w-full py-4 rounded-4xl text-lg bg-neutral-300 hover:bg-white cursor-pointer duration-200 disabled:opacity-60'
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>

            <p onClick={() => setIsOpen(false)} className='text-center text-gray-600 cursor-pointer'>Back</p>
          </form>
        ) : (
          <div className='flex flex-col gap-4 mt-3'>
            <h1 className="text-2xl font-bold mb-2 text-left">Sign up</h1>
            <button
              onClick={GoogleSignup}
              disabled={loading}
              className="w-full bg-neutral-200 hover:bg-white duration-200 text-black border rounded-4xl text-lg border-gray-300 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60 cursor-pointer"
            >
              {loading ? 'Processing...' : 'Sign up with Google'}
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className='flex items-center gap-4'>
              <span className='flex-1 h-px bg-gray-300'></span>
              <span className='text-gray-500'>or</span>
              <span className='flex-1 h-px bg-gray-300'></span>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className='w-full bg-black hover:bg-neutral-900 duration-200 border rounded-4xl text-lg border-gray-800 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60 cursor-pointer text-white'
            >
              Continue with email
            </button>
          </div>
        )}
      </div>
      <div className="mt-6 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600">Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;
