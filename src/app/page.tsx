'use client';

import React, { useState } from 'react';

import PeriodPanel from './components/PeriodPanel';


export default function Home() {
  const [ spendingPeriod, setSpendingPeriod ] = useState('week');

  const handlePeriodClick = (period: string) => {
    setSpendingPeriod(period);
  }

  return (
    <>
      <PeriodPanel handlePeriodClick={handlePeriodClick} spendingPeriod={spendingPeriod} />
    </>
  );
}
