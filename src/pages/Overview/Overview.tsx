import React from "react";
//import StatCard from "../../components/StatCard/StatCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import LineChart from "../../components/LineChart/LineChart";
import {
  AiOutlineInfoCircle,
  AiOutlineEdit,
  AiOutlineSetting,
  AiOutlineEllipsis,
  AiOutlineArrowUp,
  AiOutlineDownload,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function Overview() {
  const regions = [
    { name: "United States", users: 8904 },
    { name: "Germany", users: 4748 },
    { name: "Italy", users: 4673 },
    { name: "Russia", users: 3321 },
    { name: "China", users: 1479 },
    { name: "Indonesia", users: 1328 },
  ];

  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
    { name: "Jul", sales: 3490 },
  ];

  const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 120 },
    { name: "Mar", value: 90 },
    { name: "Apr", value: 110 },
    { name: "May", value: 130 },
    { name: "Jun", value: 100 },
    { name: "Jul", value: 110 },
    { name: "Aug", value: 120 },
    { name: "Sep", value: 140 },
    { name: "Oct", value: 150 },
    { name: "Nov", value: 130 },
    { name: "Dec", value: 140 },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-8">
        <div className="bg-white rounded-lg shadow p-6">
      {/* Titre et boutons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="flex space-x-2">
          {/* Bouton "Calendar" et icône */}
          <button className="bg-gray-200 rounded-lg px-3 py-1 text-xs border border-gray-400 flex items-center">
          <AiOutlineDownload className="text-gray-500 mr-2" />
            Calendar
          </button>
          {/* Bouton "Export" et icône */}
          <button className="bg-gray-200 rounded-lg px-2 py-1 text-xs border border-gray-400 flex items-center">
          <AiOutlineShareAlt className="text-gray-500 mr-2" />
            Export
          </button>
        </div>
      </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Carte de statistique 1 */}
            <div className="border rounded-lg p-4">
              {/* Titre et icône */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-normal">Total sales</h3>
                <AiOutlineArrowUp className="text-green-500 text-xs" />
              </div>
              {/* Valeur et variation */}
              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">$32,892</p>
                <p className="text-green-500 text-xs ml-2">↑52%</p>
              </div>
            </div>

            {/* Carte de statistique 2 */}
            <div className="border rounded-lg p-4">
              {/* Titre et icône */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-normal">Total customers</h3>
                <AiOutlineArrowUp className="text-green-500 text-xs" />
              </div>
              {/* Valeur et variation */}
              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">1,831</p>
                <p className="text-green-500 text-xs ml-2">↑34%</p>
              </div>
            </div>

            {/* Carte de statistique 3 */}
            <div className="border rounded-lg p-4">
              {/* Titre et icône */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-normal">Conversion rate</h3>
                <AiOutlineArrowUp className="text-green-500 text-xs" />
              </div>
              {/* Valeur et variation */}
              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">96,8%</p>
                <p className="text-green-500 text-xs ml-2">↑14%</p>
              </div>
            </div>
          </div>

          {/* Graphique à barres */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={700} height={300} data={data}>
                <XAxis dataKey="name" />
                <Bar dataKey="value" fill="#2563EB" /> {/* Couleur bleue */}
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Your Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductCard
              name="Nike Air Zoom Pegasus 39"
              link="product-link"
              productViews={1485}
              totalClicks={1269}
              networkClicks={829}
              clicksRatio={97}
            />
            <ProductCard
              name="Nike React Pegasus Trail 4"
              link="product-link"
              productViews={875}
              totalClicks={750}
              networkClicks={500}
              clicksRatio={90}
            />
          </div>
        </div>

        {/* Sales Report */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Graphique 1 */}
          <div className="bg-white rounded-lg shadow p-10">
            <h2 className="text-lg font-semibold mb-2">Sales Report 1</h2>
            <div style={{ height: "150px" }}>
              <LineChart data={salesData} />
            </div>
          </div>

          {/* Graphique 2 */}
          <div className="bg-white rounded-lg shadow p-10">
            <h2 className="text-lg font-semibold mb-3">Sales Report 2</h2>
            <div style={{ height: "150px" }}>
              <LineChart data={salesData} />
            </div>
          </div>

          {/* Graphique 3 */}
          <div className="bg-white rounded-lg shadow p-10">
            <h2 className="text-lg font-semibold mb-2">Sales Report 3</h2>
            <div style={{ height: "150px" }}>
              <LineChart data={salesData} />
            </div>
          </div>

          {/* Graphique 4 */}
          <div className="bg-white rounded-lg shadow p-10">
            <h2 className="text-lg font-semibold mb-2">Sales Report 4</h2>
            <div style={{ height: "150px" }}>
              <LineChart data={salesData} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow p-6">
          {/* Section Bubble Store */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logo.png"
              alt="Bubble Store Logo"
              className="w-14 h-14 rounded-full mb-3"
            />
            <h3 className="text-lg font-semibold">
              Bubble Store <span className="text-blue-500">PRO</span>
            </h3>
            <p className="text-sm text-gray-500">bubble.upscale.com</p>
            <div className="flex mt-3 space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                <AiOutlineEdit className="text-gray-500" />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                <AiOutlineSetting className="text-gray-500" />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200">
                <AiOutlineEllipsis className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          {/* Section Total Devices */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Total Devices</h3>
            <AiOutlineInfoCircle className="text-gray-500" />
          </div>
          <p className="text-3xl font-semibold mb-4">24,632</p>

          {/* Graphique à barres personnalisé */}
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className="absolute h-full bg-blue-500 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>

          {/* Légende personnalisée */}
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              <span>Product Views</span>
            </div>
            <span>89%</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
              <span>Total Clicks</span>
            </div>
            <span>11%</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Top Region</h2>
          <ul>
            {regions.map((region) => (
              <li
                key={region.name}
                className="flex items-center justify-between py-3 border-b border-gray-200"
              >
                <div className="flex items-center">
                  {region.name === "United States" && (
                    <img
                      src="/US.svg"
                      alt="United States Flag"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  {region.name === "Germany" && (
                    <img
                      src="/DE.svg"
                      alt="Germany Flag"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  {region.name === "Italy" && (
                    <img
                      src="/IT.svg"
                      alt="Italy Flag"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  {region.name === "Russia" && (
                    <img
                      src="/RU.svg"
                      alt="Russia Flag"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  {region.name === "China" && (
                    <img
                      src="/CH.svg"
                      alt="China Flag"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                  )}
                  {region.name === "Indonesia" && (
                    <img
                      src="/ID.svg"
                      alt="Indonesia Flag"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  <span>{region.name}</span>
                </div>
                <span>{region.users} users</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;
