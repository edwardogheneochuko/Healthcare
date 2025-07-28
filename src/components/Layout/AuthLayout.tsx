'use client'

import Protected from '@/src/hooks/protected'
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div>
      <Protected>
        {children}
      </Protected>
    </div>
  )
}
