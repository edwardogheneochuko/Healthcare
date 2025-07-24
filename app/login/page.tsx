'use client';

import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const page = () => {
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter()

  const GoogleLogin = async () => {
    if (loading) return; 
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in:', result.user);
      router.push('/dashboard')

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Join Today</h1>
        <h3 className="text-gray-600 dark:text-gray-300 mb-6">
          Sign in with one of the providers
        </h3>

        <div className="space-y-4">
          <button
            onClick={GoogleLogin}
            disabled={loading}
            className={`w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-md shadow-sm flex items-center justify-center gap-3 ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            <FaGoogle className="text-red-500 text-lg" />
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </button>

          <button
            className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-md shadow-sm flex items-center justify-center gap-3"
          >
            <FaFacebookF className="text-white text-lg" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
