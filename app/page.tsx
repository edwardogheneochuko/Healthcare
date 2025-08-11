
import React from 'react'
import Dashboard from '@/app/(protected)/dashboard/page'
import AuthLayout from "@/src/components/Layout/AuthLayout"


export default function page() {
  return (
    <AuthLayout>
      <Dashboard />
    </AuthLayout>
  )
}
