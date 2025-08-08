import AuthLayout from '@/src/components/Layout/AuthLayout'
import Dashboard from '@/app/(protected)/dashboard/page'
import Protected from '@/src/hooks/protected'

export default function Page() {
  return (
    <AuthLayout>
        <Dashboard />
    </AuthLayout>
  )
}
