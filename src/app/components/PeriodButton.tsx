"use client";

import React, { useState } from 'react';
import { capitalize } from '../utilities';


interface PeriodButtonProps {
  isSelected?: boolean;
  period: string;
}

const PeriodButton: React.FC<PeriodButtonProps> = ({isSelected = false, period}) =>  {
  const onPeriodClick = () => {
    
  }
  
  return (
    <button className={`px-6 py-1 ${isSelected ? "bg-accent" : "bg-transparent" } rounded-3xl`}
    onClick={onPeriodClick}
    >
      {capitalize(period)}
    </button>
  )
}

export default PeriodButton;