// src/pages/Home.jsx
import divbackground from '../assets/sidebar/man-working-on-laptop-BZeL3Gvc.png'
import { IoBagCheckOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";

function Home() {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
 <div
  className="bg-white h-[500px] sm:h-[340px] col-span-0 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom"
  style={{
    backgroundImage: `url(${divbackground})`,
  }}
>


  <div className='m-7'>
    <div className="div">
   <p className="text-sm sm:text-2xl font-bold">Congratulations Jonathan</p>

    <p>You have done 38% more sales</p>
  </div>

  <div className='div2'>
    <div className='productDetails flex justify-start gap-5 mt-5'>
      <div className="w-12 h-12 rounded-full bg-[#dffff3] flex items-center justify-center text-white text-xl">
       <IoBagCheckOutline color='#53d290' />
    </div>
    <div>
      <p>64 new orders</p>
      <p>Processing</p>
    </div>

    </div>
    <div className='productDetails flex justify-start gap-5 mt-5'>
      <div className="w-12 h-12 rounded-full bg-[#fff6ea] flex items-center justify-center text-white text-xl">
       <CiPause1 color='#f8b961' />
    </div>
    <div>
      <p>64 new orders</p>
      <p>Processing</p>
    </div>

    </div>
    <div className='productDetails flex justify-start gap-5 mt-5'>
      <div className="w-12 h-12 rounded-full bg-[#e1f5fa] flex items-center justify-center text-white text-xl">
       <PiShoppingCart color='#63d2ee' />
    </div>
    <div>
      <p>64 new orders</p>
      <p>Processing</p>
    </div>

    </div>
  </div>
  </div>



 </div>
 <div className='bg-blue-800 h-[320px]'>2</div>
 <div className='bg-emerald-600 h-[320px]'>3</div>
 <div>4</div>
 <div>5</div>
 <div>6</div>
 <div>7</div>
 <div>8</div>
 <div>9</div>
 <div>10</div>
</div>
    </div>
  )
}

export default Home