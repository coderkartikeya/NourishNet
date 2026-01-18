import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom pulsing icon for live alerts
const pulsingIcon = L.divIcon({
    className: 'css-icon',
    html: '<div class="gps_ring"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

interface Alert {
    id: number;
    lat: number;
    lng: number;
    restaurant: string;
    food: string;
    distance: string;
}

interface MapComponentProps {
    alerts: Alert[];
    onAlertClick: (alert: Alert) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ alerts, onAlertClick }) => {
    return (
        <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {alerts.map((alert) => (
                <Marker
                    key={alert.id}
                    position={[alert.lat, alert.lng]}
                    icon={pulsingIcon}
                    eventHandlers={{
                        click: () => onAlertClick(alert),
                    }}
                >
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
