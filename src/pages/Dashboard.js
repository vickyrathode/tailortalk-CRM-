import React, { useState } from 'react';
import TimeSelector from '../components/TimeSelector';
import Card from '../components/Card';
import Chart from '../components/LineChart';
import { dummyData } from '../data';

const Dashboard = () => {
  const [timeWindow, setTimeWindow] = useState('week');
  const stats = dummyData[timeWindow];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>CRM Dashboard</h1>
        <TimeSelector timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
      </header>
      <div className="stats-grid">
        <Card title="Total Users" value={stats.totalUsers} />
        <Card title="New Users" value={stats.newUsers} />
        <Card title="Revenue" value={`$${stats.revenue}`} />
      </div>
      <div className="charts-grid">
        <Chart type="pie" />
        <Chart type="bar" />
      </div>
    </div>
  );
};

export default Dashboard;
