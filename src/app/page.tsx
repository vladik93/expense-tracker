'use client';

import React, { useState, useEffect } from 'react';

import { expenses } from './data';

import PeriodPanel from './components/PeriodPanel';
import SpendingChart from './components/SpendingChart';
import GoalPanel from './components/GoalPanel';
import TransactionPanel from './components/TransactionPanel';

interface Expense {
  id: number;
  userId: number;
  description: string;
  categoryId: number;
  amount: number;
  date: string;
}

export default function Home() {
  const [ filter, setFilter ] = useState('week');

  const [ filteredExpenses, setFilteredExpenses ] = useState<Expense[]>([]);
  


  const handlePeriodClick = (periodParam: string) => {
    setFilter(periodParam);
  }

  useEffect(() => {
    const now = new Date();
    let filtered;

    switch(filter) {
      case 'week' : {
        filtered = expenses.filter(val => {
          let currentDate = new Date();
          let expenseDate = new Date(val.date);

          let oneWeekAgo = new Date(currentDate);
          oneWeekAgo.setDate(currentDate.getDate() - 7);

          return expenseDate >= oneWeekAgo && expenseDate <= currentDate
        })
        setFilteredExpenses(filtered);
      }

      break;
      
      case 'month': {
        filtered = expenses.filter(val => {
          let currentMonth = new Date().getMonth();
          let currentYear = new Date().getFullYear();

          let expenseMonth = new Date(val.date).getMonth();
          let expenseYear = new Date(val.date).getFullYear();

          return expenseMonth === currentMonth && expenseYear === currentYear;

        })

        setFilteredExpenses(filtered);
      }

      break;

      case 'year' : {
        filtered = expenses.filter(val => {
          let currentYear = new Date().getFullYear();
          let expenseYear = new Date(val.date).getFullYear();

          return expenseYear === currentYear;
        })

        setFilteredExpenses(filtered);
      }

      break;
    }
  }, [filter]);

  return (
    <>
      <PeriodPanel handlePeriodClick={handlePeriodClick} filter={filter} />
      <SpendingChart period={filter} filteredExpenses={filteredExpenses} />
      <GoalPanel />
      <TransactionPanel />
    </>
  );
}
