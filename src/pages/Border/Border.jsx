import React from 'react';

const Border = ({ width,mt=6 }) => {
  return (
    <div
      className={`mx-auto border-b border-b-gray-300 border-b-[1px] mt-${mt}`}
      style={{ width: `${width}%` }}
    />
  );
};

export default Border;
