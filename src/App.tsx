import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './pages/Overview/Overview';
import Products from './pages/Product/Product';
import SalesReport from './pages/SalesReport/SalesReport';
import Notifications from './pages/Notifications/Notifications';
import Analytics from './pages/Analytics/Analytics';
import Customers from './pages/Customers/Customers';
import Settings from './pages/Settings/Settings.tsx';
import Help from './pages/Help/Help.tsx';
import Logout from './pages/Logout/Logout.tsx';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/products" element={<Products />} />
                <Route path="/sales-report" element={<SalesReport />} />
                <Route path="/notifications" element={<Notifications/>} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<Help />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;