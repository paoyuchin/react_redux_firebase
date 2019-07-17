import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStytle";
import { FaSearchLocation } from "react-icons/fa";

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
          url: "https://cdn1.iconfinder.com/data/icons/food-5-7/128/Vigor_Rice-Food-Grain-Bowl-Meal-512.png",
          scaledSize: new window.google.maps.Size(50, 50)
        }}
      />
      <InfoWindow
        position={{
          lat: 25.06878,
          lng: 121.59003
        }}
      >
        <div>最好吃的養生粥底加啦！</div>
      </InfoWindow>
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  const api = "AIzaSyBR7My6d6rVFMvIHpzLqRf0ZyT54Y2C0ck";  
  return (
    <div className="Googlemap">
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${api}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
