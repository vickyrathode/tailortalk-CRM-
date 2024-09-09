// src/api/fetchData.js
export const fetchData = (timeWindow) => {
  // Dummy data based on the timeWindow
  const data = {
    '1 Day': { pie: { labels: ['A', 'B', 'C','D'], values: [10, 20, 30,10] }, 
    line: { labels: ['1', '2', '3','4'], values: [5, 10, 15,2] }, 
    cards: [{ title: 'New Leads', value: '40' }, { title: 'Sales', value: '$500' }] ,
    bar: { labels: ['1', '2', '3','4'], values: [5, 10, 15,2] }},


    '1 Week': { pie: { labels: ['A', 'B', 'C','D','E'], 
    values: [10, 20, 30,50,20] }, line: { labels: ['1', '2', '3','4','5'], values: [5, 10,7,15,-5] }, 
    cards: [{ title: 'New Leads', value: '50' }, { title: 'Sales', value: '$5540' }],
    bar: { labels: ['1', '2', '3','4','5'], values: [5, 10, 15,2,-5] } },

    '1 Month': { pie: { labels: ['A', 'B', 'C'], values: [10, 5, 30] }, 
    line: { labels: ['1', '2', '3'], values: [5, 60, 15] }, 
    cards: [{ title: 'New Leads', value: '60' }, { title: 'Sales', value: '$42156' }],
    bar: { labels: ['1', '2', '3'], values: [5, 10,2] } },

    '1 Year': { pie: { labels: ['A', 'B', 'C','D','E','F'], values: [10, 20, 30,1,7,23] }, 
    line: { labels: ['1', '2', '3','4','5','6'], values: [5, 10, 15,2,5,80] }, 
    cards: [{ title: 'New Leads', value: '150' }, { title: 'Sales', value: '$5748596' }], 
    bar: { labels: ['1', '2', '3','4','5','6'], values: [5, 10,20,30,1,15,2] } },
    
  };
  return new Promise((resolve) => setTimeout(() => resolve(data[timeWindow]), 1000));
};
