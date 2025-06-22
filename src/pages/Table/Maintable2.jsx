import Menu from "../../utils/Menu"
import iphone from '../../assets/Main/product-5-B4cPxpNg.png'
import applemac from '../../assets/Main/product-6-Gy-PWxj9.png'
import palystatios from '../../assets/Main/product-7-Bvj-91bc.png'
import chair from '../../assets/Main/product-8-BbgjC3Cu.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react"
import customer1 from '../../assets/Main/user1-D00qJYN4.jpg'
import customer2 from '../../assets/Main/user2-CcvFtdw4.jpg'
import customer3 from '../../assets/Main/user3-CoJW3aN6.jpg'
import customer4 from '../../assets/Main/user4-D8sJ5_HA.jpg'
import customer5 from '../../assets/Main/user5-JxJV3ECH.jpg'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const MainTable2 = () => {

    const tableHead = ["checkbox","Products","customer","Reviews","Status","Time","Action"];
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const customers = [customer1, customer2, customer3, customer4, customer5];

     

    const tableData = [
        {
           productImg:iphone,
           productname:"iPhone 13 pro max",
           customerDetail:{
            name:'Arlene McCoy',
            email:'macoy@arlene.com'
           }
        },
        {
           productImg:applemac,
           productname:"Apple MacBook Pro",
           customerDetail:{
            name:'Jerome Bell',
            email:'belljerome@yahoo.com'
           }
        },
        {
           productImg:palystatios,
           productname:"PlayStation 5 DualS",
           customerDetail:{
            name:'Jacob Jones',
            email:'jones009@hotmail.com'
           }
        },    
        {
           productImg:chair,
           productname:"Amazon Basics ...",
           customerDetail:{
            name:'Annette Black',
            email:'blackanne@yahoo.com'
           }
        },
    ];

    const LevelLoader = ({ userImg,users }) => {
        return (
            <div className='title flex-col justify-start items-center gap-3'>
             
                  <div className="flex items-center">
                    <img className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 cursor-pointer transition" src={userImg} />  
                    
                    <div>
                        <p>{users.name}</p>
                        <p>{users.email}</p>
                    </div>
                  </div>
            </div>
        )
    };

    const Reviews = ({ offstar,fullstar }) => {
        return (
            <div>
                <p className="flex"><AiFillStar color="#f8c076" /><AiFillStar color="#f8c076" /><AiFillStar color="#f8c076" /><AiFillStar color="#f8c076" /><AiOutlineStar color="#f8c076" /></p>
                <p className="text-wrap">
                    This theme is great. Clean and easy to understand....
                </p>
            </div>
        )
    }

    return (
        <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max">
                <table className="w-full table-auto border-collapse m-3">
                    <thead>
                        <tr className='border-b border-[#e5eaef]'>
                            {
                                tableHead.map((th, index) => (
                                    
                                    <th key={index} className={`pl-6 pt-7 pr-6 pb-3 ${th === 'checkbox' ? 'text-center' : 'text-left'}`}>{th == 'checkbox' ? (<input type="checkbox" />) : th}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((td, index) => (
                                <tr key={index} className="border-b border-[#e5eaef]">
                                    <td className="px-4 py-4">
                                        <div className='flex justify-center items-center gap-3'>
                                           <input type="checkbox" />
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className='flex justify-start items-center gap-3'>
                                            <img src={td.productImg} width={70} height={70} />
                                            <div className='title'>{td.productname}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <LevelLoader userImg={customers[index]} users={td.customerDetail} />
                                    </td>
                                    <td className="px-4 py-4 w-[230px]">
                                        <Reviews fullstar={4} offstar={1} />
                                    </td>
                                    <td className="px-4 py-4 text-green-600 flex-col justify-start items-center">
                                        <p className='pt-[1px] pb-[3px] bg-[#F1EBFF] text-[#8763DA] flex justify-center items-center rounded-2xl text-[12px]'>
                                            Confirmed
                                        </p>
                                    </td>
                                    <td className="px-4 py-4 flex-col justify-start items-center">
                                        <p>Nov 8</p>
                                    </td>
                                    <td className="px-4 py-4 relative">
                                        <button
                                            onClick={() =>
                                                setOpenMenuIndex(openMenuIndex === index ? null : index)
                                            }
                                            className="text-[#666666] hover:underline"
                                        >
                                            <BsThreeDotsVertical size={22} />
                                        </button>
                                        {openMenuIndex === index && (
                                            <div className="absolute top-full right-0 mt-2 z-50">
                                                <Menu />
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainTable2
