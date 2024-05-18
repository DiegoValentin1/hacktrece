import React, { useEffect, useState } from 'react'
import LineChart from './charts/LineChart'
import AxiosClient from '../shared/axios';

export default function MainCards() {
    const [building, setBuilding] = useState(null);
    const [yearly, setYearly] = useState([[], []]);
    const [datos, setDatos] = useState(null);

    function getDayOfWeek(dateString) {
        const daysOfWeek = [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
        ];

        const date = new Date(dateString);
        const dayOfWeek = date.getDay();

        return daysOfWeek[dayOfWeek];
    }

    function getWeekRange(year, weekNumber) {
        // Crear un nuevo objeto Date para el 1 de enero del año dado
        const firstDayOfYear = new Date(year, 0, 1);

        // Obtener el día de la semana del 1 de enero (0 = Domingo, 1 = Lunes, etc.)
        const dayOfWeek = firstDayOfYear.getDay();

        // Calcular el día en el que empieza la semana 1
        const startOffset = (dayOfWeek <= 4 ? -dayOfWeek + 1 : 8 - dayOfWeek);

        // Calcular el primer día de la semana deseada
        const startOfWeek = new Date(year, 0, 1 + startOffset + (weekNumber - 1) * 7);

        // Calcular el último día de la semana deseada (6 días después del primero)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        // Formatear las fechas en formato legible
        const formatDate = (date) => date.toISOString().split('T')[0].slice(8,10);

        return {
            start: formatDate(startOfWeek),
            end: formatDate(endOfWeek)
        };
    }

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
    const getMonthName2 = (monthNumber) => {
        const monthNames = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
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
                setBuilding(response);
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
                url: '/consumption-data/monthly-year/' + 'c68a8e89-35c1-41bb-b2fa-38f545eb546d',
            });
            if (!response.error) {
                console.log(response);
                setYearly([response.map((item) => getMonthName(item[0])), response.map((item) => item[1])]);
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
                url: '/consumption-data/most-consumption/c68a8e89-35c1-41bb-b2fa-38f545eb546d',
            });
            if (!response.error) {
                console.log(response);
                setDatos({...response, week:response.week.split(',')[0].slice(0,4), year:response.week.split(',')[0].slice(4)});
            }
        }catch(e){
                console.log(e);
              }
        };
        fetchMaterial();
    }, []);

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-[10vh] text-2xl font-bold text-[#1c8377] felx flex-col'>
                <div>
                    {building && building.name}
                </div>
                <div className='text-sm text-gray-500'>
                    {building && building.location}
                </div>
            </div>
            <div className='w-full h-[40vh] flex flex-col'>
                <div className='h-[20%] flex flex-row items-center'>
                    <div className=''>⚡</div>
                    <div className='text-4xl font-bold text-[#1c8377]'>{building && building.totalConsumption}</div>
                    <div className='pt-4 text-gray-500'>kW/h</div>
                </div>
                <div className='h-[80%]'>
                    <LineChart yearly={yearly}> </LineChart>
                </div>
            </div>
            <div className='w-full h-[40vh] flex flex-col p-5'>
                <div className='h-[10%] text-2xl'>Mayor Consumo</div>
                <div className='w-full h-[90%] grid grid-cols-2 gap-4'>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Día</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>{datos && getDayOfWeek(datos.day[0])}</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>{datos && datos.day[1]}</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Hora</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>{datos && datos.hour[0]}:00</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>{datos && datos.hour[1]}</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Semana</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>{datos && getWeekRange(datos.week, datos.year).start} - {datos && getWeekRange(datos.week, datos.year).end}</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>20</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                    <div className='shadow-md flex flex-col items-center justify-center  rounded-lg'>
                        <div className='text-sm text-gray-600'>Mes</div>
                        <div className='font-extrabold text-[#1c8377] -my-1'>{datos && getMonthName2(datos.month[1])}</div>
                        <div className='text-sm text-gray-700 flex flex-row'>
                            <div>{datos && datos.month[2]}</div>
                            <div className='text-sm text-gray-600'>kW/H</div></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
