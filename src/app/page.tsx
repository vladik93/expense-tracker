'use client';

import React, { useState } from 'react';

import PeriodPanel from './components/PeriodPanel';


export default function Home() {
  const [ spendingPeriod, setSpendingPeriod ] = useState('week');

  const handlePeriodClick = (period: string) => {
    console.log(period);
  }

  return (
    <>
      <PeriodPanel handlePeriodClick={handlePeriodClick} />
    </>
  );
}
