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
        
        const svgIcon = `
            <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0C5.596 0 0 5.596 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.596 19.404 0 12.5 0z" fill="#050b2e"/>
                <circle cx="12.5" cy="12.5" r="6" fill="white"/>
            </svg>
        `;
        
        const iconUrl = 'data:image/svg+xml;base64,' + btoa(svgIcon);
        
        return L.icon({
            iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
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
            {(locations || []).map((area) => {
                const quantidade = totalsByArea.get(area.nome) || 0;
                return (
                    <Marker key={area.nome} position={[area.latitude, area.longitude]}>
                        <Popup>
                            <div>
                                <div><strong>{area.nome}</strong></div>
                                <div>Tipo: {area.tipo}</div>
                                <div>Quantidade: {quantidade}</div>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
}

export default AreasMap;