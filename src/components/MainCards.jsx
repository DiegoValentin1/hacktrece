import React from 'react'
import LineChart from './charts/LineChart'

export default function MainCards() {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-[10vh] text-2xl font-bold text-[#1c8377]'>
                Bodega Principal Jiutepec
            </div>
            <div className='w-full h-[40vh] flex flex-col'>
                <div className='h-[20%] flex flex-row items-center'>
                    <div className=''>⚡</div>
                    <div className='text-4xl font-bold text-[#1c8377]'>8000</div>
                    <div className='pt-4 text-gray-500'>kW/h</div>
                </div>
                <div className='h-[80%]'>
                    <LineChart> </LineChart>
                </div>
            </div>
            <div className='w-full h-[40vh] flex flex-col p-5'>
                <div className='h-[10%] text-2xl'>Mayor Consumo</div>
                <div className='w-full h-[90%] grid grid-cols-2 gap-4'>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Día</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>Lunes</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>20</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Hora</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>14:00</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>20</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Semana</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>13-19 Mayo</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>20</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Momento</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>15 de Mayo</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>20</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
