import React from 'react';

function Customers() {
  const customers = [
    { id: 1, name: 'Adolphe Hitler', email: 'hitler@example.com', orders: 10 },
    { id: 2, name: 'Will Smith', email: 'w.smith@example.com', orders: 5 },
    { id: 3, name: 'Orelson14', email: 'petard_tv@example.com', orders: 2 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Customers</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="px-6 py-4 whitespace-nowrap">{customer.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>

        {/*<div className="bg-white rounded-lg shadow p-6">
             <h2 className="text-2xl font-semibold mb-6">Customers</h2>
             <p>Bonjour  les gens !!</p>
        </div>*/}
    </div>

  );
}

export default Customers;