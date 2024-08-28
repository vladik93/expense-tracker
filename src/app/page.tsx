'use client';

import React, { useState, useEffect } from 'react';

import PeriodPanel from './components/PeriodPanel';
import SpendingChart from './components/SpendingChart';
import GoalPanel from './components/GoalPanel';
import TransactionPanel from './components/TransactionPanel';


export default function Home() {
  const [ periods, setPeriods ] = useState([
    { period: 'week', isSelected: true },
    { period: 'month', isSelected: false },
    { period: 'year', isSelected: false }
  ]);


  useEffect(() => {
    console.log(periods);
  }, [periods]);


  // Move the function to page.tsx
  const handlePeriodClick = (periodParam: string) => {
    setPeriods(prevState => {
      return prevState.map((value) => {
        return value.period === periodParam ? {...value, isSelected: true} : {...value, isSelected: false}
      })
    })
  }

  // const handlePeriodClick = (period: string) => {
  //   setSpendingPeriod(period);
  // }

  return (
    <>
      <PeriodPanel handlePeriodClick={handlePeriodClick} periods={periods} />
      <SpendingChart />
      <GoalPanel />
      <TransactionPanel />
    </>
  );
}
