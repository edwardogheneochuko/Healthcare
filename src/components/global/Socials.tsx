'use client'
import { signIn } from '@/lib/auth-client';
import React, { useState } from 'react';

export default function Socials() {
  const [loading, setLoading] = useState(false);

  async function handleSignIn(provider: 'google' | 'github') {
    try {
      setLoading(true);
      await signIn.social({ provider });
    } catch (error) {
      console.error(`Sign in with ${provider} failed:`, error);
      // You can show a toast or error message here
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* Google Button */}
      <button
        onClick={() => handleSignIn('google')}
        disabled={loading}
        className="w-full bg-neutral-200 hover:bg-white duration-200 text-black border rounded-4xl text-lg
         border-gray-300 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60
         cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 488 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#EA4335" d="M488 261.8c0-17.4-1.5-34.1-4.3-50.3H249v95.2h135.6c-5.8 31.4-23 58-48.9 75.9v62.9h78.9c46.2-42.6 73.4-105.4 73.4-183.7z"/>
          <path fill="#34A853" d="M249 492c65.7 0 120.7-21.7 160.9-59.1l-78.9-62.9c-21.9 14.6-50 23.2-82 23.2-62.9 0-116.2-42.5-135.2-99.6H32.9v62.6C73.6 439.2 155.4 492 249 492z"/>
          <path fill="#4A90E2" d="M113.8 293.6c-6.4-19-10-39.3-10-60.1s3.6-41.1 10-60.1V110.9H32.9C11.8 151.3 0 198.6 0 245.5s11.8 94.2 32.9 134.6l80.9-63.1z"/>
          <path fill="#FBBC05" d="M249 97.6c35.8 0 67.9 12.3 93.3 36.4l70.1-70.1C369.6 25.6 314.7 0 249 0 155.4 0 73.6 52.8 32.9 110.9l80.9 62.6c19-57.1 72.3-99.6 135.2-99.6z"/>
        </svg>
        {loading ? 'Processing...' : 'Log in with Google'}
      </button>

      {/* GitHub Button */}
      <button
        onClick={() => handleSignIn('github')}
        disabled={loading}
        className="w-full bg-neutral-800 hover:bg-black duration-200 text-white border rounded-4xl text-lg
         border-gray-700 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60
         cursor-pointer"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" clipRule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.793-.263.793-.583 
            0-.288-.01-1.05-.015-2.06-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
            -1.09-.745.082-.73.082-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.833 2.807 1.304 
            3.492.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.933 
            0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.525.117-3.176 
            0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 
            2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.651.242 2.873.118 
            3.176.77.84 1.235 1.911 1.235 3.222 0 4.61-2.804 5.625-5.475 5.922.43.372.814 
            1.103.814 2.222 0 1.604-.015 2.896-.015 3.289 0 .322.192.699.8.58C20.565 
            21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
          />
        </svg>
        {loading ? 'Processing...' : 'Log in with GitHub'}
      </button>
    </div>
  );
}
