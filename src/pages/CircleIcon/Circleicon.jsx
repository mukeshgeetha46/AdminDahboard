import React from 'react'

const Circleicon = ({icon,bg,wh}) => {
  return (
    <div>
        <p className={`w-${wh} h-${wh} flex items-center justify-center rounded-full bg-[${bg}] cursor-pointer transition text-[12px] text-white`}>
                  {icon}
                   </p>
    </div>
  )
}

export default Circleicon
