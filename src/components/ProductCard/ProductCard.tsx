import React from 'react';

interface ProductCardProps {
  name: string;
  link: string;
  productViews: number;
  totalClicks: number;
  networkClicks: number;
  clicksRatio: number;
}

function ProductCard({ name, link, productViews, totalClicks, networkClicks, clicksRatio }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">{name}</h3>
      <a href={link} className="text-blue-500 mb-2 block">{link}</a>
      <p className="text-sm text-gray-500">Product Views: {productViews}</p>
      <p className="text-sm text-gray-500">Total Clicks: {totalClicks}</p>
      <p className="text-sm text-gray-500">Network Clicks: {networkClicks}</p>
      <p className="text-sm text-gray-500">Clicks Ratio: {clicksRatio}%</p>
    </div>
  );
}

export default ProductCard;