import React from 'react';
import {useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import {MAP_KEY} from "../../constants/api";
type TProps ={
    position : {
        latitude: string,
        longitude: string
    }
}

const ISSMap =({position: {latitude, longitude}}:TProps) => {
    const center = { lat: +latitude, lng: +longitude };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: MAP_KEY,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return (
        <GoogleMap zoom={5} center={center} mapContainerClassName="map-container">
            <Marker position={center} />
        </GoogleMap>
    );
};

export default ISSMap;