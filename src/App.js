import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const COMPANIES = [
  {
    id: 1,
    name: 'Empresa X',
    coordinates: [51.505, -0.09]
  },
  {
    id: 2,
    name: 'Empresa Y',
    coordinates: [11.505, -0.09]
  },
  {
    id: 3,
    name: 'Empresa XYTE',
    coordinates: [13.505, -0.09]
  },
  {
    id: 4,
    name: 'Empresa Z',
    coordinates: [12.505, -0.09]
  }
]

function App() {


  return (
    <div className="container-map">
      {
        /* 
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {
      COMPANIES.map(item => (
        <Marker 
        position={item.coordinates}
        eventHandlers={{
          click: () => {
            alert('Clicou')
          },
        }}
        >
          <Popup>
            <p>Nome: {item.name}</p>
          </Popup>
        </Marker>
      ))
    }
  </MapContainer>
        */
      }
    </div>
  );
}

export default App;