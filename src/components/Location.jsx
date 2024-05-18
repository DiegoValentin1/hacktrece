import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);
  const [red, setRed] = useState(null);
  const [error, setError] = useState(null);

  const fetchSuministro = async (lat, lon) => {
    const response = await fetch(
      `https://energiasustentable.study/energia/${lat}/${lon}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      const raw = await response.json();
      console.log(response);
      console.log(raw);
      setLocation(raw);
    }
  };

  const fetchRed = async (lat, lon) => {
    const response = await fetch(
      `https://energiasustentable.study/red/${lat}/${lon}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      const raw = await response.json();
      console.log(response);
      console.log(raw);
      setRed(raw);
    }
  };
  useEffect(() => {
    // Comprobar si la API de Geolocalización está disponible
    if (navigator.geolocation) {
      // Obtener la posición actual del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Actualizar el estado con las coordenadas
          fetchSuministro(position.coords.latitude, position.coords.longitude);
          fetchRed(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          // Manejar errores y actualizar el estado del error
          setError(error.message);
        }
      );
    } else {
      setError("La geolocalización no es compatible con este navegador.");
    }
  }, []);

  return (
    <div className="h-[100vh] w-full flex flex-col">
      <div className="w-full h-auto flex flex-row">
        <div className="h-full w-1/3">
          <img src={require("../assets/imgs/turbina.png")} alt="" srcset="" />
        </div>
        <div className="h-full w-2/3 flex justify-center items-center text-3xl font-bold flex-col m-3">
          <div>{location && location.tecnologia}</div>
          <div className="text-md font-normal">
            {location && location.energet_pr}
          </div>
        </div>
      </div>
      <div className="mt-3 w-full h-auto">
        <div className="w-full h-auto">
          <div className="font-bold">Sector</div>
          <div className="text-lg">{location && location.sector}</div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="font-bold">Empresa Proveedora</div>
          <div className="text-lg">{location && location.empresa}</div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="font-bold">Entidad de Distribución</div>
          <div className="text-lg">{location && location.entidad}</div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="font-bold">Capacidad de Generación</div>
          <div className="text-lg">
            {location && location.gener_gwh + " GWh"}
          </div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="font-bold">Capacidad de contención</div>
          <div className="text-lg">
            {location && location.capacid_mw + " MWh"}
          </div>
        </div>

        <div className="w-full h-auto mt-2">
          <div className="h-full w-2/3 font-bold text-2xl">
            Red de Distribución
          </div>
        </div>

        <div className="w-full h-auto mt-2">
          <div className="font-bold">Caracteristicas de la Red</div>
          <div className="text-lg">{red && red.Caracterí} </div>
        </div>
      </div>
      <div className="w-full h-auto mt-2">
        <div className="font-bold">Voltaje</div>
        <div className="text-lg">{red && red.Voltaje_KV + " kV"}</div>
      </div>

      <div className="w-full h-auto mt-2">
        <div className="font-bold">Capacidad de distribucion de la Red</div>
        <div className="text-lg">{red && red.voltaje_la}</div>
      </div>
    </div>
  );
};

export default Location;
