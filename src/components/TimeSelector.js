import React from 'react';

const TimeSelector = ({ onTimeChange }) => {
  const timeOptions = ['1 Day', '1 Week', '1 Month', '1 Year'];

  return (
    <div className="flex justify-center mb-4">
      {timeOptions.map(option => (
        <button
          key={option}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => onTimeChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;
