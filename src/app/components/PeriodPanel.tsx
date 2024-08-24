import React, { useState } from 'react';
import { capitalize} from '../utilities';

import PeriodButton from './PeriodButton';


interface PeriodPanelProps {
 spendingPeriod: string;
 handlePeriodClick: (period: string) => void; 
}

const PeriodPanel: React.FC<PeriodPanelProps> = ({spendingPeriod}) => {
  const [ periods, setPeriods ] = useState([
    { period: 'week', isSelected: true },
    { period: 'month', isSelected: false },
    { period: 'year', isSelected: false }
  ])

  // Move the function to page.tsx
  const handlePeriodClick = (periodParam: string) => {
    setPeriods(prevState => {
      return prevState.map((value) => {
        return value.period === periodParam ? {...value, isSelected: true} : {...value, isSelected: false}
      })
    })
  }

  return (
    <div className="bg-secondary text-sm flex justify-evenly py-2 rounded-3xl">
     {/* <button className={`px-6 py-1 bg-transparent rounded-3xl`} onClick={() => onPeriodClick('week')}>Week</button>
     <button className={`px-6 py-1 bg-accent rounded-3xl`} onClick={() => onPeriodClick('month')}>Month</button>
     <button className={`px-6 py-1 bg-transparent rounded-3xl`} onClick={() => onPeriodClick('year')}>Year</button> */}

    {periods.map(({period, isSelected}) => {
      return <PeriodButton period={period} isSelected={isSelected} handlePeriodClick={handlePeriodClick} />
    })}

    </div>
  )
}

export default PeriodPanel;