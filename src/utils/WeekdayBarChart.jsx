import React from 'react';

const WeekdayBarChart = () => {
  const data = {
    Monday: 12,
    Tuesday: 19,
    Wednesday: 8,
    Thursday: 15,
    Friday: 10,
    Saturday: 5,
    Sunday: 7,
  };

  const max = Math.max(...Object.values(data));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Weekly Data</h2>
      <div className="flex items-end justify-between h-64 border-t border-gray-200 px-2">
        {Object.entries(data).map(([day, value]) => {
          const height = (value / max) * 100;

          return (
            <div key={day} className="flex flex-col items-center">
              <div
                className="w-8 bg-blue-500 rounded-t transition-all duration-300"
                style={{ height: `${height * 2}px` }} // scale factor for visual
                title={`${day}: ${value}`}
              />
              <div className="text-sm mt-2">{day.slice(0, 3)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekdayBarChart;
