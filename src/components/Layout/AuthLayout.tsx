
import React, {PropsWithChildren} from 'react'
import Protected from '@/src/hooks/protected'


const AuthLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <Protected>
         {children}
      </Protected>
    </>
  )
}

export default AuthLayout
