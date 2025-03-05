import React from 'react';
import CustomLineChart from "../../components/CustomLineChart/CustomLineChart";
interface ProductCardProps {
  name: string;
  link: string;
  productViews: number;
  totalClicks: number;
  networkClicks: number;
  clicksRatio: number;
}

const salesData1 = [
  { sales1: 30, sales2: 20 },
  { sales1: 50, sales2: 40 },
  { sales1: 45, sales2: 60 },
  { sales1: 70, sales2: 50 },
  { sales1: 110, sales2: 65 },
  { sales1: 100, sales2: 55 },
];

function ProductCard({ name, link, productViews, totalClicks, networkClicks, clicksRatio }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">{name}</h3>
      <a href={link} className="text-blue-500 mb-2 block">{link}</a>
      <p className="text-sm text-gray-500">Product Views: {productViews}</p>
      <p className="text-sm text-gray-500">Total Clicks: {totalClicks}</p>
      <p className="text-sm text-gray-500">Network Clicks: {networkClicks}</p>
      <p className="text-sm text-gray-500">Clicks Ratio: {clicksRatio}%</p>
      <div className='courbe'>
      <CustomLineChart data={salesData1} strokeColor1="#007bff" fillColor1="#007bff" strokeColor2="green" fillColor2="lightgreen" />
      </div>
    </div>
  );
}

export default ProductCard;