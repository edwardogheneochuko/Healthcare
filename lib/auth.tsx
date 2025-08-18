
// src/auth/index.ts
import db from "@/prisma/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),

  // Email + password authentication
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: true,
  },

  // Extra user fields
  user: {
    additionalFields: {
      role: { type: "string", required: false, defaultValue: "USER", input: false },
      firstName: { type: "string", required: true },
      lastName: { type: "string", required: true },
    },
  },

  // Account linking (so a user can link GitHub + Google + Email)
  account: {
    accountLinking: {
      enabled: true,
    },
  },

  // Social logins
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      mapProfileToUser: (profile) => {
        // GitHub profiles sometimes have no name
        const [first, ...rest] = (profile.name || "User").split(" ");
        return {
          firstName: first,
          lastName: rest.join(" ") || "",
        };
      },
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser: (profile) => {
        return {
          firstName: profile.given_name || profile.name?.split(" ")[0] || "Unknown",
          lastName: profile.family_name || profile.name?.split(" ")[1] || "",
        };
      },
    },
  },
  
  plugins: [nextCookies()],
});
