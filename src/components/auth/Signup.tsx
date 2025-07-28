'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { FaGoogle } from 'react-icons/fa';
import * as z from 'zod';
import { useForm } from 'react-hook-form'; // ✅ FIXED: missing import
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
  firstName: z.string().min(2, "Firstname must be at least 2 characters"),
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

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

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
    setIsSubmitting(true);
    // ... handle form registration here
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);
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

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
        Create an Account
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Sign up using your Google account
      </p>

      {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

      <button
        onClick={handleGoogleSignup}
        disabled={loading}
        className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 py-2 px-4 rounded-lg shadow-sm flex items-center justify-center gap-3 disabled:opacity-60"
      >
        <FaGoogle className="text-red-500 text-lg" />
        {loading ? 'Processing...' : 'Sign up with Google'}
      </button>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUp;
