import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useData } from '../context/DataProvider.jsx';

function AreasMap() {
    const { locations, dadosFiltrados } = useData();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const defaultIcon = useMemo(() => {
        const iconRetinaUrl = new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).toString();
        const iconUrl = new URL('leaflet/dist/images/marker-icon.png', import.meta.url).toString();
        const shadowUrl = new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).toString();
        return L.icon({
            iconRetinaUrl,
            iconUrl,
            shadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
        });
    }, []);
    L.Marker.prototype.options.icon = defaultIcon;
    const center = useMemo(() => {
        if (!locations || locations.length === 0) return [-23.55052, -46.633308];
        return [locations[0].latitude, locations[0].longitude];
    }, [locations]);

    const totalsByArea = useMemo(() => {
        const totalsMap = new globalThis.Map();
        for (const item of (dadosFiltrados || [])) {
            totalsMap.set(item.area, (totalsMap.get(item.area) || 0) + (item.quantidade || 0));
        }
        return totalsMap;
    }, [dadosFiltrados]);

    if (!mounted) return null;

    return (
        <MapContainer key={`${center[0]}-${center[1]}`} center={center} zoom={16} style={{ height: '60vh', width: '100%' }}>
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {(locations || []).map((area) => (
                <Marker key={area.nome} position={[area.latitude, area.longitude]}>
                    <Popup>
                        <div>
                            <div><strong>{area.nome}</strong></div>
                            <div>Tipo: {area.tipo}</div>
                            <div>Quantidade: {totalsByArea.get(area.nome) || 0}</div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default AreasMap;