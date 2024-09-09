import React, { useState, useEffect } from 'react';
import TimeSelector from './components/TimeSelector';
import Card from './components/Card';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import { fetchData } from './api/fetchData';

const App = () => {
  const [timeWindow, setTimeWindow] = useState('1 Day');
  const [data, setData] = useState({
    pie: { labels: [], values: [] },
    line: { labels: [], values: [] },
    bar: { labels: [], values: [] },
    cards: []
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(timeWindow);
        setData(result || {
          pie: { labels: [], values: [] },
          line: { labels: [], values: [] },
          bar: { labels: [], values: [] },
          cards: []
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setData({
          pie: { labels: [], values: [] },
          line: { labels: [], values: [] },
          bar: { labels: [], values: [] },
          cards: []
        });
      }
    };

    loadData();
  }, [timeWindow]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Container */}
      <div className="flex-grow p-6 bg-gray-100">
        <header className='text-center w-full mb-3 bg-gray-50 rounded shadow-red-700  p-2'>
          <h1 className='text-3xl font-bold text-gray-600'>CRM Statistics Dashboard</h1>
        </header>
        <TimeSelector onTimeChange={setTimeWindow} />
        <div className="flex flex-wrap justify-center">
          {data.cards && data.cards.length > 0 ? (
            data.cards.map((card, index) => (
              <Card key={index} title={card.title} value={card.value} />
            ))
          ) : (
            <p>No card data available</p>
          )}
        </div>
        <div className="mt-6 flex flex-col lg:flex-row lg:justify-around w-full ">
          {data.pie && data.pie.labels && data.pie.values ? (
            <PieChart data={data.pie} />
          ) : (
            <p>No pie chart data available</p>
          )}
          {data.line && data.line.labels && data.line.values ? (
            <LineChart data={data.line} />
          ) : (
            <p>No line chart data available</p>
          )}
          {data.bar && data.bar.labels && data.bar.values ? (
            <BarChart data={data.bar} />
          ) : (
            <p>No bar chart data available</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2024 CRM Dashboard. All rights reserved.</p>
        <p>
          Designed by Vikki Rathod | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
