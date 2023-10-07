import React from 'react';

import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFoYWJ1YnNha2kiLCJhIjoiY2xnZmFtMXowMDgwcjNubHF6OGc2b2xvMCJ9.x3p7ZPHVVd518UFX5d_t8g';

const MapLocation = () => {
    return (
        <Map keyboard
            initialViewState={{
                latitude: 25.472122260201242,
                longitude: -80.48679015767192,
                zoom: 14
            }}
            style={{ width: "100%", height: 600 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}

        >
            <Marker longitude={-80.48679015767192} latitude={25.472122260201242} color="red" />
        </Map>
    );
};

export default MapLocation;