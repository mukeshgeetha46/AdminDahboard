import React from 'react';

const Border = ({ width, height, mt = 6, vertical = false }) => {
  return vertical ? (
    <div
      className={`border-l border-gray-300 mt-${mt}`}
      style={{
        height: `${height || 100}px`,
        borderLeftWidth: '2px',
      }}
    />
  ) : (
    <div
      className={`mx-auto border-b border-b-gray-300 border-b-[1px] mt-${mt}`}
      style={{ width: `${width}%` }}
    />
  );
};

export default Border;
