'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import Gym from '../global/Gym';
import Socials from '../global/Socials';
import { loginUser } from '@/actions/loginUser';
import { useAuthStore } from '../store/authStore';

// Zod schema
const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

const inputStyles =
  'border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white focus:outline-none focus:border-blue-400 transition';

const Login = () => {
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  // Email/password login
  async function onSubmit(values: LoginFormValues) {
    const result = await loginUser(values.email, values.password);

    if (!result.success || !result.data) {
      toast.error("Login failed", { description: result.error });
      return;
    }
    form.reset();

    // Store user + token in Zustand
    useAuthStore.getState().setAuth(result.data.user, result.data.token);

    console.log("Login success:", result.data); // contains user + token
    toast.success("Logged in successfully!");
    router.push("/dashboard");
  }

  // Password input with visibility toggle
  const PasswordInput = () => {
    const [visible, setVisible] = useState(false);
    
    return (
      <div className="relative">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Password"
          {...form.register('password')}
          className={inputStyles}
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
          {visible ? '🙈' : '👁️'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <Gym />
      <div className="flex flex-col gap-4">
        <h2 className="text-left font-bold text-white text-2xl py-2">Log in</h2>
        <Socials />

        <div className="flex items-center gap-4">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="text-gray-500">or</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-5">
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

        <div>
          <span className="flex justify-between">
            <label className="text-white text-lg">Password</label>
            <Link href="/forgot-password" className="text-xs text-red-300 mt-2">
              Forgot Password
            </Link>
          </span>
          <PasswordInput />
          {form.formState.errors.password && (
            <p className="text-red-400 text-sm mt-1">{form.formState.errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-black w-full py-4 cursor-pointer rounded-4xl text-lg bg-neutral-300 hover:bg-white"
        >
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
