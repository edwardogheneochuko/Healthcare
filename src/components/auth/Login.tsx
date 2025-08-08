'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import Gym from '../global/Gym';
import Socials from '../global/Socials';

// ✅ Zod schema
const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const inputStyles =
  'border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white focus:outline-none focus:border-blue-400 transition';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 📌 Form submission
  async function onSubmit(values: LoginFormValues) {
    try {
      console.log('Logging in with:', values);
      // TODO: Call your login API here
      toast.success('Logged in successfully!');
      router.push('/dashboard');
    } catch (err: unknown) {
      let message = 'Something went wrong. Please try again.';
      if (err instanceof Error) {
        message = err.message;
      }
      toast.error('Login failed', { description: message });
      console.error(err);
    }
  }

  // 📌 Google login
  const GoogleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in:', result.user);
      toast.success('Welcome!', { description: `Hello ${result.user.displayName}` });
      router.push('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error && 'code' in err) {
        const errorCode = (err as { code?: string }).code;
        if (errorCode === 'auth/popup-closed-by-user') {
          toast.error('Google sign-in cancelled.');
        } else if (errorCode === 'auth/cancelled-popup-request') {
          console.warn('Sign-in popup request cancelled.');
        } else {
          toast.error('Google sign-in failed.');
          console.error('Error signing in with Google:', err);
        }
      } else {
        toast.error('Google sign-in failed.');
        console.error('Unknown error during Google sign-in:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Gym />
      <div className="flex flex-col gap-4">
        <h2 className="text-left font-bold text-white text-2xl py-2">Log in</h2>
        <Socials />

        <button
          onClick={GoogleLogin}
          disabled={loading}
          className="w-full bg-neutral-200 hover:bg-white duration-200 text-black border rounded-4xl text-lg
          border-gray-300 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60"
        >
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>

        <div className="flex items-center gap-4">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500">or</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-5">
        {/* Email */}
        <div>
          <label className="text-white text-lg">Email</label>
          <input
            type="email"
            {...form.register('email')}
            placeholder="your-email@gmail.com"
            className={inputStyles}
          />
          {form.formState.errors.email && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <span className="flex justify-between">
            <label className="text-white text-lg">Password</label>
            <Link href="/forgot-password" className="text-sm text-red-300">
              Forgot Password
            </Link>
          </span>
          <input
            type="password"
            {...form.register('password')}
            placeholder="-------"
            className={inputStyles}
          />
          {form.formState.errors.password && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="text-black w-full py-4 rounded-4xl text-lg bg-neutral-300 hover:bg-white cursor-pointer duration-200"
        >
          Log in
        </button>

        {/* Sign up link */}
        <div className="text-center text-gray-50">
          I don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-400 font-medium cursor-pointer">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
