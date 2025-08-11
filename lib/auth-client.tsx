import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react
 
export const { signIn, signUp, useSession , signOut} = 
createAuthClient({
})

export const signInWithSocials = async (provider:'google'|'github') => {
     await signIn.social({
        provider: provider,
    })
}