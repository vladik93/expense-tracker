"use client";

import React, { useState } from 'react';
import { capitalize } from '../utilities';


interface PeriodButtonProps {
  isSelected?: boolean;
  period: string;
  handlePeriodClick: (period: string) => void;
}

const PeriodButton: React.FC<PeriodButtonProps> = ({isSelected = false, period, handlePeriodClick}) =>  {

  
  const onPeriodClick = (period: string) => {
      handlePeriodClick(period);
  }
  
  return (
    <button className={`px-6 py-1 ${isSelected ? "bg-accent" : "bg-transparent" } rounded-3xl`}
    onClick={() => onPeriodClick(period)}
    >
      {capitalize(period)}
    </button>
  )
}

export default PeriodButton;