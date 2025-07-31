import db from "@/prisma/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";


export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql", 
    }),
    emailAndPassword: {
        enabled: true, 
        minPasswordLength: 8,
        autoSignIn: true,
      }, 
      account: {
        accountLinking: {
            enabled: true
        },
      },
      socialProviders: {
        github: {
          clientId: process.env.GITHUB_CLIENT_ID as string, 
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
          mapProfileToUser: (profile) => {
            return {
              firstName: profile.name.split(" ")[0],
              lastName: profile.name.split(" ")[1],
            };
          },
        }, 
        user: {
          additionalFields: {
            role: {
              type: "string",
              required: false,
              defaultValue: "USER",
              input: false, // don't allow user to set role
            },
            userName: {
              type: "string",
              required: true,
              defaultValue: "en",
            },
          },
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
            mapProfileToUser: (profile) => {
              return {
                firstName: profile.given_name,
                lastName: profile.family_name,
              };
            },
        }, 
    }, 
    plugins: [nextCookies()] // make sure this is the last plugin in the array
});
