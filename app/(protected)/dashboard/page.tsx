'use client';

import Care from '@/src/components/Dashboard/Care'
import Others from '@/src/components/Dashboard/Others'
import Plan from '@/src/components/Dashboard/Plan'


export default function DashboardPage() {
  return (
    <>
      <Plan />
      <Care />
      <Others /> 
    </>
  );
}
