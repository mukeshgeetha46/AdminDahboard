import Menu from "../../utils/Menu"
import iphone from '../../assets/Main/product-5-B4cPxpNg.png'
import applemac from '../../assets/Main/product-6-Gy-PWxj9.png'
import palystatios from '../../assets/Main/product-7-Bvj-91bc.png'
import chair from '../../assets/Main/product-8-BbgjC3Cu.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react"

const MainTable = () => {

    const tableHead = ["Products","Payments","Status","Action"];
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    const tableData = [
        {
           productImg:iphone,
           productname:"iPhone 13 pro max",
        },
        {
           productImg:applemac,
           productname:"Apple MacBook Pro",
        },
        {
           productImg:palystatios,
           productname:"PlayStation 5 DualS",
        },    
        {
           productImg:chair,
           productname:"Amazon Basics ...",
        },
    ];

    const LevelLoader = () => {
        return (
            <div className='title flex-col justify-start items-center gap-3'>
                <p>$180/ 499</p>
                <p>Partially paid</p>
                <div className="flex h-[7px] w-[100px] mt-2">
                    <div className="w-2/3 bg-[#0085db] rounded-tl-2xl rounded-bl-2xl"></div>
                    <div className="w-1/6 bg-[#f5f8fb] rounded-tr-2xl rounded-br-2xl"></div>
                </div>
            </div>
        )
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max">
                <table className="w-full table-auto border-collapse m-3">
                    <thead>
                        <tr className='border-b border-[#e5eaef]'>
                            {
                                tableHead.map((th, index) => (
                                    <th key={index} className="pl-6 pt-7 pr-6 pb-3 text-left">{th}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((td, index) => (
                                <tr key={index} className="border-b border-[#e5eaef]">
                                    <td className="px-4 py-4">
                                        <div className='flex justify-start items-center gap-3'>
                                            <img src={td.productImg} width={70} height={70} />
                                            <div className='title'>{td.productname}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <LevelLoader />
                                    </td>
                                    <td className="px-4 py-4 text-green-600 flex-col justify-start items-center">
                                        <p className='pt-[1px] pb-[3px] bg-[#F1EBFF] text-[#8763DA] flex justify-center items-center rounded-2xl text-[12px]'>
                                            Confirmed
                                        </p>
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

export default MainTable
