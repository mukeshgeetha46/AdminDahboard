import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useState } from 'react';




export default function TrackInvertedSlider() {

    const [sliderValue,setSliderValu] = useState(10)
// Generate marks from 0 to 100 with step of 10
const marks = Array.from({ length: 11 }, (_, i) => ({
  value: i * 10,
  label: `${i * 10}`,
}));

function valuetext(value) {
  setSliderValu(value);
  return `${value}°C`;
}
console.log('value',sliderValue)

  return (
    <Box sx={{
        paddingTop:"6px"
    }}>
    
    <p className='text-[16px] leading-[24px] pt-5'>Set Discount Percentage <span className='text-red-500'>*</span></p>

     <div className='flex justify-center items-center'>
        <p className='text-[30px] leading-[36px]'>{sliderValue}</p>
     </div>

      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
        step={10}
        min={0}
        max={100}
      />
      <p className='text-[12px] leading-[22px] pt-2'>Set a percentage discount to be applied on this product.</p>
    </Box>
  );
}
