import React from 'react'
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

export default function MainCert() {
    return (
        <div className='w-full h-full flex flex-col relative'>
            <div className='w-full h-[10vh] text-2xl font-bold text-[#1c8377]'>
                Bodega Principal Jiutepec
            </div>
            <div className='h-[72vh] w-full flex flex-col'>
                <div className='w-full h-[18%] shadow-lg rounded-2xl p-3 flex flex-row'>
                    <div className='w-3/4'>
                        <div className='w-full h-[30%] font-bold text-lg text-[#333]'>ISO 809000</div>
                        <div className='w-full h-[70%] flex flex-col text-gray-700'>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                        </div>
                    </div>
                    {true ? <div className='w-1/4 flex items-center justify-center text-[#1c8377]'><TiTick style={{height:"60px", width:"60px"}}/></div> :
                    <div className='w-1/4 flex items-center justify-center text-[#c1121f]'><ImCross style={{height:"35px", width:"35px"}}/></div>}
                </div>
                <div className='w-full h-[18%] shadow-lg rounded-2xl p-3 flex flex-row'>
                    <div className='w-3/4'>
                        <div className='w-full h-[30%] font-bold text-lg text-[#333]'>ISO 809000</div>
                        <div className='w-full h-[70%] flex flex-col text-gray-700'>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                        </div>
                    </div>
                    {false ? <div className='w-1/4 flex items-center justify-center text-[#1c8377]'><TiTick style={{height:"60px", width:"60px"}}/></div> :
                    <div className='w-1/4 flex items-center justify-center text-[#c1121f]'><ImCross style={{height:"35px", width:"35px"}}/></div>}
                </div>
                <div className='w-full h-[18%] shadow-lg rounded-2xl p-3 flex flex-row'>
                    <div className='w-3/4'>
                        <div className='w-full h-[30%] font-bold text-lg text-[#333]'>ISO 809000</div>
                        <div className='w-full h-[70%] flex flex-col text-gray-700'>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                            <div className=''>- Reducir tu gasto de kilo whats</div>
                        </div>
                    </div>
                    {true ? <div className='w-1/4 flex items-center justify-center text-[#1c8377]'><TiTick style={{height:"60px", width:"60px"}}/></div> :
                    <div className='w-1/4 flex items-center justify-center text-[#c1121f]'><ImCross style={{height:"35px", width:"35px"}}/></div>}
                </div>
                 
            </div>
            <div className='absolute h-[7vh] bottom-[10vh] bg-[#1c8377] rounded-2xl w-full p-3 text-2xl font-bold text-[#f2f2f2] flex justify-center items-center'>
                Descargar Certificado
            </div>
        </div>
    )
}
