// actions/users.ts
'use server';

import { auth } from "@/lib/auth";
import { RegisterFormValues } from "@/src/auth/Signup";

export async function registerUser(data: RegisterFormValues) {
  try {
    const res = await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: `${data.firstName} ${data.lastName}`,
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });

    // res may not contain token automatically, so sign them in immediately
    const loginRes = await auth.api.signInEmail({
      body: { email: data.email, password: data.password },
    });

    return {
      success: true,
      data: loginRes, // contains user + token/session
      error: null,
    };
  } catch (error: any) {
    console.error("Registration error (server):", {
      message: error.message,
      status: error.status,
      statusCode: error.statusCode,
      body: JSON.stringify(error.body, null, 2),
    });
    return {
      success: false,
      data: null,
      error: error.message || JSON.stringify(error),
    };
  }
}
