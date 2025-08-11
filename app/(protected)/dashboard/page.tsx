'use client'

import React, { useEffect } from 'react'
import { auth } from '@/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      Dashboard
      {user && (
        <p>Welcome, {user.displayName || user.email}</p>
      )}
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Page
