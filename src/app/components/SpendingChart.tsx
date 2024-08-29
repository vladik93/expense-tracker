import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Label, Text } from 'recharts';

interface Expense {
  id: number;
  userId: number;
  description: string;
  categoryId: number;
  amount: number;
  date: string;
}

interface SpendingChartProps {
  period: string;
  filteredExpenses: Expense[]; 
}

interface ExpenseTotalsByCategory {
  [key: number]: number;
}


const data = [
  { name: 'Category A', value: 500 },
  { name: 'Category B', value: 700 },
  { name: 'Category C', value: 500 }
];

const colors = ['#B9695D', '#5DB98C', '#625DB9'];

const SpendingChart: React.FC<SpendingChartProps> = ({period, filteredExpenses}) => {
  const [ expenseTotal, setExpenseTotal ] = useState(0);
  const [ expensesByCategory, setExpensesByCategory ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);


  useEffect(() => {
    console.log(expensesByCategory)
  }, expensesByCategory)

  useEffect(() => {
    let total = filteredExpenses.reduce((acc, expense) => {
      return acc + expense.amount
    }, 0);

    setExpenseTotal(total);
    setIsLoading(false);

  }, [filteredExpenses]);

  useEffect(() => {
    let expensesByCategory = filteredExpenses.reduce<ExpenseTotalsByCategory>((acc, expense) => {
    
      if(!acc[expense.categoryId]) {
        acc[expense.categoryId] = 0;
      } 

      acc[expense.categoryId] += expense.amount;

      setExpensesByCategory(acc);
    }, {}); 
  }, [filteredExpenses]);

  return (
    <div className="relative max-w-44 mx-auto mb-6">
      <div className="h-40 w-40">
        {isLoading ? 
          <div className="flex items-center w-full h-full justify-center">
            <p>Loading...</p>
          </div>
          : 
          <>
            <PieChart width={160} height={160} className="flex" >
              <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={5} dataKey="value" isAnimationActive={false}>
              <Label value="You have spent" position="center" fontSize="8" fontWeight="bold" className="-translate-y-5" /> 
              <Label value={`$${expenseTotal}`} position="center" fontSize="20" fontWeight="bold" /> 
              <Label value={`this ${period}`} position="center" fontSize="8" offset={0} fontWeight="bold" className="translate-y-5" /> 

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
          </>
      
        }
        
      </div>
    </div>
  )
}


export default SpendingChart;