// src/components/StatCard/StatCard.tsx
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  variation: string;
  className?: string;
}

function StatCard({ title, value, variation, className }: StatCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className ? className : ''}`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-2">{value}</p>
      <p className="text-sm text-gray-500">{variation}</p>
    </div>
  );
}

export default StatCard;