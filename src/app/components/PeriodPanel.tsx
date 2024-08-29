import React, { useState } from 'react';
import { capitalize} from '../utilities';

import PeriodButton from './PeriodButton';





interface PeriodPanelProps {
 filter: string;
 handlePeriodClick: (period: string) => void; 
}

const PeriodPanel: React.FC<PeriodPanelProps> = ({filter, handlePeriodClick}) => {
  const [ periods, setPeriods ] = useState(['week','month','year']);

  return (
    <div className="bg-secondary-bg text-sm flex justify-evenly py-2 mb-6 rounded-3xl">
      {periods.map((period) => {
        return period === filter ? 
        <PeriodButton period={period} isSelected={true} handlePeriodClick={handlePeriodClick} />
        : 
        <PeriodButton period={period} isSelected={false} handlePeriodClick={handlePeriodClick} />
      })}



    </div>
  )
}

export default PeriodPanel;