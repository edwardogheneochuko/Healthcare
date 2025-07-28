'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
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
    </div>
  );
};

export default SignUp;
