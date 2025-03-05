import React from 'react';
import { LineChart, Line, XAxis, YAxis /*CartesianGrid*/, Tooltip, Area, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: { name: string; sales1: number; sales2: number }[];
  strokeColor1: string;
  fillColor1: string;
  strokeColor2: string;
  fillColor2: string;
}

function CustomLineChart({ data, strokeColor1, fillColor1, strokeColor2, fillColor2 }: LineChartProps) {
  return (
    <div style={{ width: '100%', maxWidth: '800px', height: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            {/* Dégradé pour la courbe */}
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={fillColor1} stopOpacity={0.8} />
              <stop offset="95%" stopColor={fillColor1} stopOpacity={0.1} />
            </linearGradient>

            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={fillColor2} stopOpacity={0.8} />
              <stop offset="95%" stopColor={fillColor2} stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/*<CartesianGrid strokeDasharray="3 3" />*/}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/*courbe et remplissage */}
          <Area type="monotone" dataKey="sales1" stroke="none" fill="url(#gradient1)" className="area-fill-1"/>
          <Area type="monotone" dataKey="sales2" stroke="none" fill="url(#gradient2)" />
          <Line type="monotone" dataKey="sales1" stroke={strokeColor1} strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="sales2" stroke={strokeColor2} strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CustomLineChart;
