'use client';

import Care from '@/src/Dashboard/Care'
import Others from '@/src/Dashboard/Others'
import Plan from '@/src/Dashboard/Plan'
import Title from '@/src/Dashboard/Title';


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
