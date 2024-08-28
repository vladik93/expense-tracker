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
    <div className="relative max-w-44 mx-auto mb-6">
      <PieChart width={160} height={160} className="flex" >
        <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={5} dataKey="value">
        <Label value="You have spent" position="center" fontSize="8" fontWeight="bold" className="-translate-y-5" /> 
        <Label value={`$${value}`} position="center" fontSize="20" fontWeight="bold" /> 
        <Label value="this year" position="center" fontSize="8" offset={0} fontWeight="bold" className="translate-y-5" /> 

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} strokeWidth="0"   />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute right-0 flex translate-x-6 -translate-y-3">
        <span className="border-[1px] rounded-full h-6 w-6 mr-2 flex items-center justify-center border-[#8BB588]">
          <img src="/icons/up-arrow.svg" />
        </span>
        <span className="text-[#8BB588]">15%</span>
      </div>
    </div>
  )
}


export default SpendingChart;