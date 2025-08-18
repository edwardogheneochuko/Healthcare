'use client'
import Link from "next/link";
import Gym from "../global/Gym";


export default function ForgotPassword() {
  return (
      <form className="text-white">
        <Gym />
          <h2 className='text-left font-bold text-white text-2xl mt-5'>
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
                className="border-2 border-gray-400 w-full h-14 rounded-md placeholder:text-gray-400 placeholder:tracking-widest px-3 mt-2 text-white"
              />
            <button className='text-black w-full py-4 rounded-4xl text-lg
            bg-neutral-300 hover:bg-white cursor-pointer duration-200'>
               Send Reset Link
            </button>
          </div>

          <div className="mt-6 space-y-3 text-center">
            <p className="text-sm text-gray-500">
            Don&apos;t worry, we&apos;ll help you reset your password.
            </p>
            <p className="text-center text-sm ">
              Remembered your password?
            <Link href="/login" className="text-blue-400 font-medium cursor-pointer ml-2">
              Log in
            </Link>
          </p>
          </div>
      </form>
  );
}


