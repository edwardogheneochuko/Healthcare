'use server';

import { auth } from "@/lib/auth";
import { RegisterFormValues } from "@/src/components/auth/Signup";

export async function registerUser(data: RegisterFormValues) {
  try {
    console.log(data);

    await auth.api.signUpEmail({
      returnHeaders: true,
      body: {
        email: data.email,
        password: data.password,
        name: `${data.name} ${data.userName}`,
        userName: data.userName
      } as any,
    });

    return {
      success: true,
      data: data,
      error: null,
    };
  } catch (error:any) {
    console.error('Registration error:', error);
    return {
      success: false,
      data: null,
      error: error?.message || 'Registration failed',
    };
  }
}
