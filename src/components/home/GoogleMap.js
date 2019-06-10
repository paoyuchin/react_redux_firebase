import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStytle";

const lat = 25.06878;
const lng = 121.59003;
function Map () {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: lat, lng: lng }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{
          lat: lat,
          lng: lng
        }}
        icon={{
          url: "https://ui-ex.com/images/transparent-twitter-modern-1.png",
          scaledSize: new window.google.maps.Size(100, 100)
        }}
      />
      <InfoWindow
        position={{
          lat: 25.06878,
          lng: 121.59003
        }}
      >
        <div>here!!</div>
      </InfoWindow>
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  const api = "AIzaSyBR7My6d6rVFMvIHpzLqRf0ZyT54Y2C0ck";  
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
