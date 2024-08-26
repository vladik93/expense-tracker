import { useState } from 'react';
import { PieChart, Pie, Cell, Label, Text } from 'recharts';

const data = [
  { name: 'Category A', value: 500 },
  { name: 'Category B', value: 700 },
  { name: 'Category C', value: 500 }
];

const colors = ['#B9695D', '#5DB98C', '#625DB9'];

const SpendingChart = () => {
  const [ value, setValue ] = useState(12000);

  return (
    <div className="relative max-w-44 mx-auto">
      <PieChart width={160} height={160} className="flex" >
        <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={5} dataKey="value">
        <Label value="You have spent" position="center" fontSize="8" fontWeight="bold" className="-translate-y-5" /> 
        <Label value={`${value}`} position="center" fontSize="24" fontWeight="bold" /> 
        <Label value="of 25,000" position="center" fontSize="8" offset={0} fontWeight="bold" className="translate-y-5" /> 

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} strokeWidth="0"   />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute right-0 flex translate-x-4">
        <span>
          <img src="/icons/up-arrow.svg" />
        </span>
        <span>15%</span>
      </div>
    </div>
  )
}


export default SpendingChart;