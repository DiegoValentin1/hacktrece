import React, { useEffect, useState } from 'react'
import LineChart from './charts/LineChart'
import AxiosClient from '../shared/axios';

export default function MainCash() {
    const [building, setBuilding] = useState(null);
    const [building2, setBuilding2] = useState(null);
    const [yearly, setYearly] = useState([[], []]);
    const [datos, setDatos] = useState(null);
    const [devices, setDevices] = useState([]);

    const getMonthName = (monthNumber) => {
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        // Restar 1 porque los arrays en JavaScript son de cero-indexados (0 es Enero, 1 es Febrero, etc.)
        return monthNames[monthNumber - 1];
    }

    useEffect(() => {
        const fetchMaterial = async () => {
            try{
            const response = await AxiosClient({
                method: "GET",
                url: '/building/' + 'c68a8e89-35c1-41bb-b2fa-38f545eb546d',
            });
            if (!response.error) {
                console.log(response);
                setBuilding2(response);
            }
        }catch(e){
                console.log(e);
              }
        };
        fetchMaterial();
    }, []);

    useEffect(() => {
        const fetchMaterial = async () => {
            try{
            const response = await AxiosClient({
                method: "GET",
                url: '/billing/currently/c68a8e89-35c1-41bb-b2fa-38f545eb546d',
            });
            if (!response.error) {
                console.log(response);
                setBuilding(response);
            }
        }catch(e){
                console.log(e);
              }
        };
        fetchMaterial();
    }, []);


    useEffect(() => {
        const fetchDevices = async () => {
            try{
            const response = await AxiosClient({
                method: "GET",
                url: '/electronic-device/building/c68a8e89-35c1-41bb-b2fa-38f545eb546d',
            });
            if (!response.error) {
                console.log(response);
                setDevices(response);
            }
        }catch(e){
                console.log(e);
              }
        };
        const fetchMaterial = async () => {
            try{
            const response = await AxiosClient({
                method: "GET",
                url: '/billing/annual/c68a8e89-35c1-41bb-b2fa-38f545eb546d',
            });
            if (!response.error) {
                console.log(response);
                setYearly([response.map((item) => getMonthName(item.month)), response.map((item) => item.cost)]);
            }
        }catch(e){
                console.log(e);
              }
        };
        fetchMaterial();
        fetchDevices();
    }, []);

    return (
        <div className='w-full max-h-[100vh] flex flex-col'>
            <div className='w-full h-[10vh] text-2xl font-bold text-[#1c8377] felx flex-col'>
                <div>
                    {building2 && building2.name}
                </div>
                <div className='text-sm text-gray-500'>
                    {building2 && building2.location}
                </div>
            </div>
            <div className='w-full h-[40vh] flex flex-col'>
                <div className='h-[20%] flex flex-row items-center'>
                    <div className='text-2xl'>$</div>
                    <div className='text-4xl font-bold text-[#1c8377]'>{building && building.cost}</div>
                    <div className='pt-4 text-gray-500 text-lg'>{building && building.currency}</div>
                </div>
                <div className='h-[80%]'>
                    <LineChart yearly={yearly}> </LineChart>
                </div>
            </div>

            <div className='w-full h-[40vh] shadow-lg rounded-2xl bg-[#e4e4e4] overflow-y-auto relative'>
                <div className='w-full flex justify-center text-2xl font-bold text-[#1c8377]'>Sumatoria por Dispositivo</div>
                <div className='flex flex-row w-full py-3 mt-5 font-bold'>
                    <div className='w-3/4 pl-2'>Dispositivo</div>
                    <div className='w-1/4'>{building && building.currency}</div>
                </div>
                {devices.map((item) =>
                    <div className='flex flex-row w-full py-3'>
                        <div className='w-3/4 pl-2'>{item.name}</div>
                        <div className='w-1/4'>{(item.consumption * 1.019).toFixed(2)}</div>
                    </div>)}
                <div className='flex flex-row w-full py-3 mt-5 font-bold text-[#1c8377]'>
                    <div className='w-3/4 pl-2'>Total</div>
                    <div className='w-1/4'>{devices.reduce((acum, item)=>{return (item.consumption * 1.019) + acum }, 0).toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}
