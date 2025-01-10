import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet"; 

import mapPinIcon from "./../../assets/icons/map-pin.svg";
// import mapMarkerIcon from "./../../assets/icons/map-marker.svg";

import "leaflet/dist/leaflet.css"; 

const position: LatLngExpression = [52.4099, 16.9259];

const customIcon = L.icon({
  iconUrl: mapPinIcon,
  iconSize: [32, 32],
  iconAnchor: [30, 24],
  popupAnchor: [1, -34],
});

const Map = () => {
  return (
    <MapContainer
      center={position}
      zoom={12}
      className="w-full h-80 lg:h-full mx-auto rounded"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          I live here. <br />
          Poznan is a very beautiful city!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
