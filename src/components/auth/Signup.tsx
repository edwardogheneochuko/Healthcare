'use client';

import React, { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import Gym from '../global/Gym';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { registerUser } from '@/actions/users';
import { Eye, EyeOff } from 'lucide-react';

// Validation schema
const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

const inputStyles =
  'bg-transparent border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white focus:outline-none';

const SignUp: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // for form submit
  const [loading, setLoading] = useState(false); // for google auth
  const [isOpen, setIsOpen] = useState(false); // show email form
  const [error, setError] = useState('');
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setError('');
    setIsSubmitting(true);
    toast.info('Processing Info');

    try {
      console.log('Creating user with data:', data);
      const result = await registerUser(data); // your server action

      if (result?.success) {
        toast.success('Success!', { description: 'Account has been created' });
        form.reset(); // reset after success
        router.push('/dashboard');
      } else {
        // keep inputs so user can correct
        const message = result?.error || 'Signup failed. Please try again.';
        toast.error('Error', { description: message });
        setError(message);
        console.error('Signup failed:', result?.error);
      }
    } catch (err: unknown) {
      let message = 'Something went wrong. Please try again.';
      if (err instanceof Error) {
        message = err.message;
      }
      toast.error('Error', { description: message });
      setError(message);
      console.error('Unexpected signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const GoogleSignup = async () => {
    setError('');
    setLoading(true);
    toast.info('Processing Google sign up...');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('User signed up via Google:', result.user);
      toast.success('Signed in with Google');
      router.push('/dashboard');
    } catch (err: unknown) {
      let message = 'Google signup failed. Please try again or use email.';
      if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
      toast.error('Google signup failed', { description: message });
      console.error('Google signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Password input as an inner component
  const PasswordInput: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const toggle = () => setPasswordVisible((v) => !v);

    return (
      <div className="relative">
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
          {...form.register('password')}
          className={inputStyles}
          aria-invalid={!!form.formState.errors.password}
        />
        <button
          type="button"
          aria-label={passwordVisible ? 'Hide password' : 'Show password'}
          onClick={toggle}
          className="absolute right-3 cursor-pointer top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    );
  };

  return (
    <div className="text-white max-w-md mx-auto">
      <Gym />
      <div className="p-4">
        {isOpen ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-lg space-y-3"
            noValidate
          >
            <label className="block">First Name</label>
            <input
              type="text"
              {...form.register('firstName')}
              placeholder="First Name"
              className={inputStyles}
              aria-invalid={!!form.formState.errors.firstName}
            />
            {form.formState.errors.firstName && (
              <p
                className="text-red-500 text-sm mt-1"
                role="alert"
                aria-live="polite"
              >
                {form.formState.errors.firstName.message}
              </p>
            )}

            <label className="block">Last Name</label>
            <input
              type="text"
              {...form.register('lastName')}
              placeholder="Last Name"
              className={inputStyles}
              aria-invalid={!!form.formState.errors.lastName}
            />
            {form.formState.errors.lastName && (
              <p
                className="text-red-500 text-sm mt-1"
                role="alert"
                aria-live="polite"
              >
                {form.formState.errors.lastName.message}
              </p>
            )}

            <label className="block">Email</label>
            <input
              type="email"
              {...form.register('email')}
              placeholder="your@example.com"
              className={inputStyles}
              aria-invalid={!!form.formState.errors.email}
            />
            {form.formState.errors.email && (
              <p
                className="text-red-500 text-sm mt-1"
                role="alert"
                aria-live="polite"
              >
                {form.formState.errors.email.message}
              </p>
            )}

            <label className="block">Password</label>
            <PasswordInput />
            {form.formState.errors.password && (
              <p
                className="text-red-500 text-sm mt-1"
                role="alert"
                aria-live="polite"
              >
                {form.formState.errors.password.message}
              </p>
            )}

            {error && (
              <p
                className="text-red-500 text-sm mt-1"
                role="alert"
                aria-live="polite"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-black w-full py-4 rounded-4xl text-lg bg-neutral-300 hover:bg-white cursor-pointer duration-200 disabled:opacity-60"
            >
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </button>

            <p
              onClick={() => setIsOpen(false)}
              className="text-center text-gray-600 cursor-pointer mt-2"
            >
              Back
            </p>
          </form>
        ) : (
          <div className="flex flex-col gap-4 mt-3">
            <h1 className="text-2xl font-bold mb-2 text-left text-white">
              Sign up
            </h1>

            <button
              onClick={GoogleSignup}
              disabled={loading}
              className="w-full bg-neutral-200 hover:bg-white duration-200 text-black cursor-pointer
               border rounded-4xl text-lg border-gray-300 py-3 px-4 shadow-sm flex items-center 
               justify-center gap-3 transition disabled:opacity-60"
            >
              {/* Google SVG */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 488 512"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
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

            <div className="flex items-center gap-4">
              <span className="flex-1 h-px bg-gray-300" />
              <span className="text-gray-500">or</span>
              <span className="flex-1 h-px bg-gray-300" />
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-black hover:bg-neutral-900 duration-200 border rounded-4xl text-lg border-gray-800 py-3 px-4 shadow-sm flex items-center justify-center gap-3 transition disabled:opacity-60 cursor-pointer text-white"
            >
              Continue with email
            </button>

            {error && (
              <p
                className="text-red-500 text-sm mt-1"
                role="alert"
                aria-live="polite"
              >
                {error}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUp;
