import React from "react";
import BackButton from "../components/layout/botton-back.jsx";
import AreasMap from "../components/map.jsx";
import Mapa from "../assets/undraw_global-team_8jok (1).svg";
function Maps() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <BackButton />
        <h1 className="text-3xl font-bold text-slate-950">Mapa interativo</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 mb-4">
            O mapa interativo ao lado exibe as áreas monitoradas e a
            quantidade de pessoas presentes em cada área.
            clique em cada área para ver os dados detalhados.
          </p>
          <div className="flex justify-center mt-10 ">
            <img src={Mapa} alt="Mapa ilustrativo" className="w-80 h-64 object-contain" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="ml-20 mr-20 mb-10 rounded-lg overflow-hidden">
            <AreasMap />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Maps;