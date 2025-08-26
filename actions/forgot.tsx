'use server';

import { auth } from "@/lib/auth";

export async function sendResetLink(email: string) {
  try {
    const res = await auth.api.forgetPassword({
      body: { email, redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/login` },
    });

    return {
      success: true,
      data: res,
      error: null,
    };
  } catch (error: any) {
    console.error("Forgot password error:", error);

    let message = "Something went wrong. Please try again.";

    if (error?.message) {
      message = error.message;
    }

    return {
      success: false,
      data: null,
      error: message,
    };
  }
}
