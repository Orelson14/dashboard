import React from 'react';
import LineChart from '../../components/LineChart/LineChart';

function SalesReport() {
  const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
  ];

  return (
    //<p>Bonjour les gens</p>
      <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Sales Report</h2>
      <LineChart data={data} />
    </div>
  );
}

export default SalesReport;