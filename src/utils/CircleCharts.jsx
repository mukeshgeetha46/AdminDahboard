import React from 'react'

const CircleCharts = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-1">
      <div className="relative w-[180px] h-[180px] group">
        {/* First slice - 45% (red) */}
        <div
          className="absolute w-full h-full rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          title="Section A: 45%"
          style={{
            background:
              "conic-gradient(#FF6B6B 0deg, #FF6B6B 162deg, transparent 162deg)",
            transform: "rotate(0deg)",
          }}
        />
        {/* Second slice - 30% (blue) */}
        <div
          className="absolute w-full h-full rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          title="Section B: 30%"
          style={{
            background:
              "conic-gradient(#4ECDC4 0deg, #4ECDC4 108deg, transparent 108deg)",
            transform: "rotate(162deg)",
          }}
        />
        {/* Third slice - 25% (yellow) */}
        {/* Third slice - 25% (blue - #0085db) */}
<div
  className="absolute w-full h-full rounded-full cursor-pointer hover:opacity-80 transition-opacity"
  title="Section C: 25%"
  style={{
    background: "conic-gradient(#0085db 0deg, #0085db 90deg, transparent 90deg)",
    transform: "rotate(270deg)",
  }}
/>

        {/* Inner white circle to create ring effect */}
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: "70%",
            height: "70%",
            top: "15%",
            left: "15%",
          }}
        />
      </div>

    
    </div>
    </div>
  )
}

export default CircleCharts
