import React from "react";
import BackButton from "../components/layout/botton-back.jsx";
import AreasMap from "../components/map.jsx";
function Maps() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Maps Page</h1>
      <AreasMap />
      <BackButton />
      
    </div>
  );
}
export default Maps;