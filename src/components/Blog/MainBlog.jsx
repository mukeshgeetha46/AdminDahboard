import divbackground from '../../assets/blog/c59875e5-ac70-4e16-af55-2625acda8212.png'
import divbackground2 from '../../assets/blog/62afd8e7-96a6-425a-afea-232475d1ba26.png'
import divbackground3 from '../../assets/blog/Services-at-Dubai-International-Airport.jpg'
import profile from '../../assets/Main/user1-D00qJYN4.jpg'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { GoDot } from "react-icons/go";


const MainBlog = () => {
    return (
        <div className="mainblog">
        <div className="grid grid-cols-l md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
  className="bg-white h-[500px] sm:h-[340px] col-span-2  bg-no-repeat bg-cover bg-center rounded-2xl shadow-lg relative flex flex-col justify-between    "
  style={{
    backgroundImage: `url(${divbackground})`,
  }}
>
        <div className="absolute inset-0 bg-black/40 rounded-2xl z-0" />
        <div className='m-5 flex justify-between items-center'>
             <img className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition relative z-10 " src={profile} />
             <p className='relative z-10 pl-3 pr-3 pt-1 pb-1 text-white bg-[#0085db] rounded-2xl text-[14px]'>Gadget</p>
        </div>

        <div className='relative z-10 m-5'>
            <div className='bottomcontant'>
              <p className='text-[23px] font-bold text-white'>Early Black Friday Amazon deals: cheap TVs, headphones</p>
            </div>

            <div className='flex justify-between items-center text-white mt-5'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                   <p className=''><MdOutlineRemoveRedEye /></p>  
                   <p>8769</p>
                </div>
                <div className='flex items-center gap-2'>
                   <p className=''><BiMessageDetail /></p>  
                   <p>3</p>
                </div>
                </div>   

                <div>
                   <div className='flex items-center'>
                   <p className=''><GoDot  size={20}/></p>  
                   <p>Tue, Jun 24</p>
                </div>
                </div>

         
            </div>
        </div>
</div>

          <div
  className="bg-white h-[500px] sm:h-[340px] col-span-2 lg:col-span-1 bg-no-repeat bg-cover bg-center rounded-2xl shadow-lg relative flex flex-col justify-between    "
  style={{
    backgroundImage: `url(${divbackground2})`,
  }}
>
        <div className="absolute inset-0 bg-black/40 rounded-2xl z-0" />
        <div className='m-5 flex justify-between items-center'>
             <img className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition relative z-10 " src={profile} />
             <p className='relative z-10 pl-3 pr-3 pt-1 pb-1 text-white bg-[#0085db] rounded-2xl text-[14px]'>Health</p>
        </div>

        <div className='relative z-10 m-5'>
            <div className='bottomcontant'>
              <p className='text-[23px] font-bold text-white'>Presented by Max Rushden with Barry Glendenning, Philippe</p>
            </div>

            <div className='flex justify-between items-center text-white mt-5'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                   <p className=''><MdOutlineRemoveRedEye /></p>  
                   <p>8769</p>
                </div>
                <div className='flex items-center gap-2'>
                   <p className=''><BiMessageDetail /></p>  
                   <p>3</p>
                </div>
                </div>   

                <div>
                   <div className='flex items-center'>
                   <p className=''><GoDot  size={20}/></p>  
                   <p>Tue, Jun 24</p>
                </div>
                </div>

         
            </div>
        </div>
</div>
         {
  Array.from({ length: 10 }, (_, i) => (
 <div className="col-span-1 rounded-2xl shadow-lg relative bg-white h-[430px]">
             <div className="bg-no-repeat bg-cover bg-center h-[240px] flex flex-col justify-end items-end " style={{
            backgroundImage: `url(${divbackground3})`,
         }}>

          <div className=' absolute top-[50%] right-[90%]'>
             <img className="w-11 h-11 rounded-full hover:bg-gray-300 cursor-pointer transition  ml-5 mb-5" src={profile} />
          </div>
            <p className='relative z-10 pl-3 pr-3 pt-1 pb-1 bg-[white] text-black rounded-2xl text-[14px] w-[70px] h-[30px] m-3'>Gadget</p>
              
             </div>
             
             <div className='mt-10 ml-2'>
           

               <p className='z-10 pl-3 pr-3 pt-1 pb-1 bg-[#707a82] text-white rounded-2xl text-[14px] w-[70px] h-[30px] m-3'>Gadget</p>

               <p className='ml-3 text-[20px] w-[390px] leading-6 font-bold'>
                Garmins Instinct Crossover is a rugged hybrid smartwatch
               </p>

               
             </div>

              <div className='flex justify-between items-center m-5'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                   <p className=''><MdOutlineRemoveRedEye /></p>  
                   <p>8769</p>
                </div>
                <div className='flex items-center gap-2'>
                   <p className=''><BiMessageDetail /></p>  
                   <p>3</p>
                </div>
                </div>   

                <div>
                   <div className='flex items-center'>
                   <p className=''><GoDot  size={20}/></p>  
                   <p>Tue, Jun 24</p>
                </div>
                </div>

         
            </div>
          </div>
  ))
}

          
          <div className="col-span-1">
              1
          </div>
        </div>
        </div>
    )
}

export default MainBlog