import React from 'react';
import { capitalize} from '../utilities';

import PeriodButton from './PeriodButton';


interface PeriodPanelProps {
 handlePeriodClick: (period: string) => void; 
}

const PeriodPanel: React.FC<PeriodPanelProps> = ({handlePeriodClick}) => {

  const onPeriodClick = (period: string) => {
    handlePeriodClick(period);
  }

  return (
    <div className="bg-secondary text-sm flex justify-evenly py-2 rounded-3xl">
     <button className={`px-6 py-1 bg-transparent rounded-3xl`} onClick={() => onPeriodClick('week')}>Week</button>
     <button className={`px-6 py-1 bg-accent rounded-3xl`} onClick={() => onPeriodClick('month')}>Month</button>
     <button className={`px-6 py-1 bg-transparent rounded-3xl`} onClick={() => onPeriodClick('year')}>Year</button>
    </div>
  )
}

export default PeriodPanel;