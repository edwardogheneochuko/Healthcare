'use client';

import { useState } from "react";
import Link from "next/link";
import Gym from "../global/Gym";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Example: API call or Firebase auth
      // await sendPasswordResetEmail(auth, email);
      // OR
      // await fetch("/api/forgot-password", { method: "POST", body: JSON.stringify({ email }) })

      setMessage("✅ Password reset link sent to your email.");
    } catch (error) {
      setMessage("❌ Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="text-white" onSubmit={handleSubmit}>
      <Gym />

      <h2 className="text-left font-bold text-white text-2xl mt-5">
        Recover Password
      </h2>

      <div className="mt-3 space-y-6">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white bg-transparent"
        />

        <button
          type="submit"
          disabled={loading}
          className="text-black w-full py-4 rounded-4xl text-lg bg-neutral-300 hover:bg-white cursor-pointer duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>

      {message && (
        <p className="mt-4 text-center text-sm">
          {message}
        </p>
      )}

      <div className="mt-6 space-y-3 text-center">
        <p className="text-sm text-gray-500">
          We'll send you a link to reset your password.
        </p>
        <p className="text-center text-sm">
          Remembered your password?
          <Link
            href="/login"
            className="text-blue-400 font-medium cursor-pointer ml-2"
          >
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}
