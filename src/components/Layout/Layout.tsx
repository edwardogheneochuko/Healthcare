
import Protected from '@/src/hooks/protected'
import React, { PropsWithChildren } from 'react'

const Layout = ({children}: PropsWithChildren) => {
  return (
    <div>
        <Protected>
            {children}
        </Protected>
    </div>
  )
}

export default Layout
