'use client';

import Care from '@/src/components/Dashboard/Care'
import Others from '@/src/components/Dashboard/Others'
import Plan from '@/src/components/Dashboard/Plan'
import Title from '@/src/components/Dashboard/Title';


export default function DashboardPage() {
  return (
    <>
      <Title />
      <Plan />
      <Care />
      <Others /> 
    </>
  );
}
