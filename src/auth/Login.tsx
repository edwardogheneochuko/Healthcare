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

// Zod schema for validation
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
    defaultValues: { email: '', password: '' },
  });

  // Email/password login
  async function onSubmit(values: LoginFormValues) {
    try {
      toast.success('Logged in successfully!');
      router.push('/dashboard');
    } catch (err: unknown) {
      let message = 'Something went wrong. Please try again.';
      if (err instanceof Error) message = err.message;
      toast.error('Login failed', { description: message });
      console.error(err);
    }
  }

  // Google login
  const GoogleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in:', result.user);
      toast.success('Welcome!', { description: `Hello ${result.user.displayName}` });
      router.push('/dashboard');
    } catch (err: unknown) {
      console.error('Error signing in with Google:', err);
      toast.error('Google sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Gym />
      <div className="flex flex-col gap-4">
        <h2 className="text-left font-bold text-white text-2xl py-2">Log in</h2>

        <button
          onClick={GoogleLogin}
          disabled={loading}
          className="w-full bg-neutral-200 hover:bg-white text-black border rounded-4xl text-lg py-3 px-4 shadow-sm flex items-center justify-center gap-3 disabled:opacity-60"
        >
          <svg className="w-5 h-5" viewBox="0 0 488 512">
            <path fill="#EA4335" d="M488 261.8c0-17.4-1.5-34.1-4.3-50.3H249v95.2h135.6c-5.8 31.4-23 58-48.9 75.9v62.9h78.9c46.2-42.6 73.4-105.4 73.4-183.7z"/>
            <path fill="#34A853" d="M249 492c65.7 0 120.7-21.7 160.9-59.1l-78.9-62.9c-21.9 14.6-50 23.2-82 23.2-62.9 0-116.2-42.5-135.2-99.6H32.9v62.6C73.6 439.2 155.4 492 249 492z"/>
            <path fill="#4A90E2" d="M113.8 293.6c-6.4-19-10-39.3-10-60.1s3.6-41.1 10-60.1V110.9H32.9C11.8 151.3 0 198.6 0 245.5s11.8 94.2 32.9 134.6l80.9-63.1z"/>
            <path fill="#FBBC05" d="M249 97.6c35.8 0 67.9 12.3 93.3 36.4l70.1-70.1C369.6 25.6 314.7 0 249 0 155.4 0 73.6 52.8 32.9 110.9l80.9 62.6c19-57.1 72.3-99.6 135.2-99.6z"/>
          </svg>
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>

        <div className="flex items-center gap-4">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500">or</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-5">
        <div>
          <label className="text-white text-lg">Email</label>
          <input type="email" {...form.register('email')} placeholder="your-email@gmail.com" className={inputStyles} />
          {form.formState.errors.email && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <span className="flex justify-between">
            <label className="text-white text-lg">Password</label>
            <Link href="/forgot-password" className="text-xs text-red-300 mt-2">
              Forgot Password
            </Link>
          </span>
          <input type="password" {...form.register('password')} placeholder="-------" className={inputStyles} />
          {form.formState.errors.password && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="text-black w-full py-4 cursor-pointer
        rounded-4xl text-lg bg-neutral-300 hover:bg-white">
          Log in
        </button>

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
