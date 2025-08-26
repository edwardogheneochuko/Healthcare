'use server';

import { auth } from "@/lib/auth";

export async function loginUser(email: string, password: string) {
  try {
    const res = await auth.api.signInEmail({
      body: { email, password },
    });

    return {
      success: true,
      data: res, // contains session + user
      error: null,
    };
  } catch (error: any) {
    console.error("Login error (server):", error);

    let message = "Something went wrong. Please try again.";

    if (error?.status === 401 || error?.statusCode === 401) {
      message = "Invalid email or password";
    }

    // Handle Supabase-style error
    if (error?.error === "invalid_grant") {
      message = "Invalid email or password";
    }

    return {
      success: false,
      data: null,
      error: message,
    };
  }
}
