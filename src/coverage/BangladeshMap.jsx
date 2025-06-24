import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const FlyToLocation = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    if (coordinates) {
      map.flyTo(coordinates, 10);
    }
  }, [coordinates]);
  return null;
};

const SearchBox = ({ coverage, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const found = coverage.find(
      (location) =>
        location.city.toLowerCase().includes(value) ||
        location.district.toLowerCase().includes(value) ||
        location.region.toLowerCase().includes(value) ||
        location.covered_area.some((area) => area.toLowerCase().includes(value))
    );

    if (found) {
      onSearch([found.latitude, found.longitude]);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search by city, district or area..."
      value={query}
      onChange={handleSearch}
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm mb-4"
    />
  );
};

const BangladeshMap = ({ coverage }) => {
  const [coordinates, setCoordinates] = useState(null);

  return (
    <div className="w-full">
      <SearchBox coverage={coverage} onSearch={setCoordinates} />
      <div className="h-[400px] w-full">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full rounded-xl shadow-md"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {coordinates && <FlyToLocation coordinates={coordinates} />}

          {coverage.map((location, idx) => (
            <Marker
              key={idx}
              position={[location.latitude, location.longitude]}
            >
              <Popup>
                <div className="space-y-1">
                  <h2 className="font-bold text-lg">{location.city}</h2>
                  <p><strong>District:</strong> {location.district}</p>
                  <p><strong>Region:</strong> {location.region}</p>
                  <p><strong>Status:</strong> {location.status}</p>
                  <p><strong>Covered Areas:</strong> {location.covered_area.join(', ')}</p>
                  <a
                    href={location.flowchart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Flowchart
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default BangladeshMap;
