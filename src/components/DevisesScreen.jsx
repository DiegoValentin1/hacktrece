import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react'
import AxiosClient from '../shared/axios';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DevicesScreen = () => {
  const [enabled, setEnabled] = useState(false);
  const [devices, setDevices] = useState([]);
  const [filtered, setFiltered] = useState([]);

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


  useEffect(() => {
    fetchDevices();
    setInterval(() => {
      fetchDevices();
    }, 2000);
  }, []);

  const changeStatus = async (id) => {
    try{
    const response = await AxiosClient({
      method: "GET",
      url: '/electronic-device/status/' + id,
    });
    if (!response.error) {
      console.log(response);
    }
  }catch(e){
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center pt-3 w-full flex-col">
      <div className="flex justify-center w-full h-[7vh] flex-col">
        <label htmlFor="price" className="block text-lg font-semibold leading-6 mb-1 text-[#1c8377]">
          Consumo Al Instante
        </label>
        <div className='text-3xl'>{devices.reduce((acum, item)=>{
          if (item.status) {
            return (item.consumption * 1.019) + acum
          } else {
            return acum + 0;
          }
         }, 0).toFixed(2)}</div>
      </div>
      <div className='h-[77vh] w-full flex flex-col py-4 gap-3'>
        {devices && devices.map((item) =>
          <div key={item.id} className='flex flex-col relative h-auto p-3 shadow-2xl rounded-2xl bg-[#e4e4e4]' >
            <div className='flex flex-row gap-2'>
              <div className='text-lg font-bold text-[#1c8377]'>{item && item.name}</div>
              <div className='text-sm text-gray-700 flex items-center justify-center mt-1'>{item && item.type}</div>
            </div>
            <div className='flex flex-row w-full'>
              <div className='flex flex-row items-center w-[70%]'>
                <div className=''>⚡</div>
                <div className='text-4xl font-bold text-[#1c8377]'>{item && item.consumption}</div>
                <div className='pt-4 text-gray-500'>kW/h</div>
              </div>
              <div className='w-[30%] flex justify-center items-center'>
                <Switch
                  checked={item.status}
                  onChange={async () => {
                    await changeStatus(item.id);
                    await fetchDevices();
                  }}
                  className={classNames(
                    item.status ? 'bg-[#1c8377]' : 'bg-gray-200 focus:ring-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c8377]'
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    className={classNames(
                      item.status ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  >
                    <span
                      className={classNames(
                        item.status ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    >
                      <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                        <path
                          d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className={classNames(
                        item.status ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    >
                      <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                      </svg>
                    </span>
                  </span>
                </Switch>
              </div>
            </div>
            <div className='text-[10px] text-gray-400 absolute top-1 right-2'>{item && item.id}</div>
          </div>
        )}
      </div>
    </div >
  );
};

export default DevicesScreen;
