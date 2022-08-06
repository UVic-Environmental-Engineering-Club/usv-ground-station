import { Flex } from "@chakra-ui/react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
import { useSocketContext } from "../../../lib/contexts/SocketContext";

const center = {
  lat: 48.44606960958475,
  lng: -123.28338270697772,
};

function MapContainer() {
  const { addPoint, points, usvPoint } = useSocketContext();
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <Flex grow={1} h="100%" bg="purple">
      <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY ?? ""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={(e) => {
            if (!e.latLng) return;
            addPoint({ lat: e.latLng.lat(), long: e.latLng.lng() });
          }}
        >
          {points.map((point) => {
            return (
              <Marker
                key={point.lat + point.long}
                position={{ lat: point.lat, lng: point.long }}
              />
            );
          })}
          {usvPoint && (
            <Marker
              icon={"./boat.png"}
              key={usvPoint.lat + usvPoint.long}
              position={{ lat: usvPoint.lat, lng: usvPoint.long }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </Flex>
  );
}

export default MapContainer;
