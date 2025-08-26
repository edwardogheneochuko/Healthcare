'use client';

import Link from "next/link";
import { useForgotStore } from "@/src/store/authStore";
import { sendResetLink } from "@/actions/forgot";
import { toast } from "sonner";
import Gym from "../global/Gym";
import { useState, useRef, useEffect } from "react";

export default function ForgotPassword() {
  const { email, setEmail, resetSent, setResetSent } = useForgotStore();
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus email input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!email.trim()) {
      toast.error("Please enter your email");
      setLoading(false);
      return;
    }

    try {
      const result = await sendResetLink(email);

      if (!result.success) {
        toast.error("Reset failed", { description: result.error });
        return;
      }

      toast.success("Password reset link sent!", {
        description: "Check your email inbox."
      });
      setResetSent(true); // update global store
    } catch (err) {
      console.error("Forgot password error:", err);
      toast.error("Server error", { description: "Try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-900 rounded-md text-white shadow-lg"
    >
      <Gym />
      <h2 className="text-left font-bold text-2xl mt-5 mb-4">
        Recover Password
      </h2>

      <div className="space-y-6">
        <label htmlFor="email" className="text-lg font-medium">
          Email
        </label>
        <input
          ref={inputRef}
          type="email"
          required
          name="email"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-600 w-full h-14 rounded-md
                     px-3 placeholder-gray-400 text-white focus:border-blue-400
                     focus:ring-1 focus:ring-blue-400 outline-none transition"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex justify-center items-center w-full py-4 rounded-3xl text-lg
                     bg-blue-500 hover:bg-blue-600 disabled:opacity-50 transition duration-200"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
          ) : (
            "Send Reset Link"
          )}
        </button>

        {resetSent && (
          <p className="text-green-400 mt-2 text-center font-medium">
            Reset link has been sent to your email!
          </p>
        )}
      </div>

      <div className="mt-6 space-y-3 text-center">
        <p className="text-sm text-gray-400">
          Don&apos;t worry, we&apos;ll help you reset your password.
        </p>
        <p className="text-sm text-gray-300">
          Remembered your password?
          <Link
            href="/login"
            className="text-blue-400 font-medium ml-2 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}
