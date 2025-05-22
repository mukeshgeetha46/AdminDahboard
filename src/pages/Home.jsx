// src/pages/Home.jsx
import divbackground from '../assets/sidebar/man-working-on-laptop-BZeL3Gvc.png'
import { IoBagCheckOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";

function Home() {

  const productDetailsData = [
  {
    icon: <IoBagCheckOutline color="#53d290" />,
    bgColor: "#dffff3",
    title: "64 new orders",
    subtitle: "Processing",
  },
  {
    icon: <CiPause1 color="#f8b961" />,
    bgColor: "#fff6ea",
    title: "64 new orders",
    subtitle: "Processing",
  },
  {
    icon: <PiShoppingCart color="#63d2ee" />,
    bgColor: "#e1f5fa",
    title: "64 new orders",
    subtitle: "Processing",
  },
];

  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
 <div
  className="bg-white h-[500px] sm:h-[340px] col-span-0 lg:col-span-2 bg-no-repeat bg-[length:400px_auto] bg-right-bottom rounded-2xl shadow-lg"
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
   {productDetailsData.map((item, index) => (
        <div key={index} className="productDetails flex justify-start gap-5 mt-5">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
            style={{ backgroundColor: item.bgColor }}
          >
            {item.icon}
          </div>
          <div>
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
  </div>
  </div>



 </div>


 <div className='bg-white  h-[340px] shadow-md rounded-2xl'>
   <div className='flex justify-between items-center m-5'>
    <div className='payments flex-col'>
       <p className='text-2xl font-bold'>Payments</p>
       <p>Last 7 days</p>
    </div>
    <div className='payments flex-col'>
       <p className='text-[20px] font-bold'>12,389</p>
     <p className="flex justify-center items-center pl-4 pr-4 pt-[1px] pb-[1px] text-[12px] bg-[#f7ddb6] rounded-2xl text-[#E7761B] border border-[#E7761B]">
-3.8%
</p>

    </div>
   </div>
 

 <div className='flex justify-center items-center gap-6 mt-15'>
       <div className=''>
       <p className="bg-[#dfdfdf] w-[9px] h-[50px] rounded-2xl">&nbsp;</p>
       <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
       <p>M</p>

      </div>
       <div className=''>
       <p className="bg-[#dfdfdf] w-[9px] h-[50px] rounded-2xl">&nbsp;</p>
       <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
       <p>T</p>

      </div>
       <div className=''>
       <p className="bg-[#dfdfdf] w-[9px] h-[50px] rounded-2xl">&nbsp;</p>
       <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
       <p>W</p>

      </div>
       <div className=''>
       <p className="bg-[#dfdfdf] w-[9px] h-[50px] rounded-2xl">&nbsp;</p>
       <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
       <p>T</p>

      </div>
       <div className=''>
       <p className="bg-[#dfdfdf] w-[9px] h-[50px] rounded-2xl">&nbsp;</p>
       <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
       <p>F</p>

      </div>
       <div className=''>
       <p className="bg-[#dfdfdf] w-[9px] h-[50px] rounded-2xl">&nbsp;</p>
       <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
       <p>S</p>

      </div>
       <div className=''>
       <p className="bg-[#dfdfdf] w-[9px] h-[50px] rounded-2xl">&nbsp;</p>
       <p className="bg-[#0085db] w-[9px] h-[30px] rounded-2xl mt-2">&nbsp;</p>
       <p>S</p>

      </div>
  </div>

 </div>




 <div className='bg-white h-[340px] shadow-md rounded-2xl'>3</div>
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