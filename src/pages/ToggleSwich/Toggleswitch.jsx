import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Label text */}
     

      {/* Toggle switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        <div className="w-11 h-6 bg-gray-400 peer-checked:bg-blue-600 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 transition-colors duration-300" />
        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
