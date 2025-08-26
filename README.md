This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
Authentication
This project uses Better Auth for server-side authentication, combined with React, Next.js, and Zustand for client-side state management.

## Features
Email/Password Signup: Users can create an account using email, password, first name, and last name.
Email/Password Login: Users can log in with their registered credentials.
Forgot Password: Users can request a password reset link via email.
Social Sign-in: (Optional / placeholders exist for Google and GitHub authentication.)
Client-side Auth State: Zustand is used to store the authenticated user and token.

## Stack / Libraries
Backend Auth: Better Auth
Forms & Validation: React Hook Form + Zod
Notifications: Sonner
Client State Management: Zustand
Next.js: App Router with Client Components

## How it works
Signup:

User submits email, password, first name, and last name.
registerUser calls auth.api.signUpEmail on the server.
On success, user is redirected to /dashboard.

Login:

User submits email and password.
loginUser calls auth.api.signInEmail on the server.
On success, Zustand stores user and token, and user is redirected to /dashboard.

Forgot Password:
User submits email.
sendResetLink calls auth.api.forgetPassword (or forgotPasswordEmail depending on Better Auth version).
User receives an email with a reset link.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## test entry
email: "test@example.com",
password: "Test1234!",
firstName: "Test",
lastName: "User",
