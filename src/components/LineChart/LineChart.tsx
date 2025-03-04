import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface LineChartProps {
  data: { name: string; sales: number }[];
}

function CustomLineChart({ data }: LineChartProps) {
  return (
    <LineChart width={308} height={190} data={data} >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default CustomLineChart;