import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full md:w-1/3">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default Card;
