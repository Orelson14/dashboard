import React from 'react';
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Analytics() {
  {/*const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];*/}

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/*<h2 className="text-2xl font-semibold mb-6">Analytics</h2>
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">User Activity</h3>
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
             <Legend />
             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>*/}

        <div className="bg-white rounded-lg shadow p-6">
         <h2 className="text-2xl font-semibold mb-6">Analytics</h2>
         <p>Bonjour  les gens !!</p>
        </div>
    </div>
  );
}

export default Analytics;