import { FC, ChangeEvent, useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker, StandaloneSearchBox } from "@react-google-maps/api";

import IGooglePlaceProps from "./props";
import { Input } from "..";

export const GooglePlaces: FC<IGooglePlaceProps> = ({
  setPlaceId,
  coordinates,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(12);
  const [searchBox, setSearchBox] =
    useState<null | google.maps.places.SearchBox>(null);
  const [marker, setMarker] = useState<null | google.maps.LatLngLiteral>(
    coordinates
  );
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 51.5,
    lng: -0.2,
  });

  // for the correct display of the center of the map (London)
  useEffect(() => {
    let timeout = window.setTimeout(() => {
      setCenter(
        coordinates
          ? coordinates
          : {
              lat: 51.51444600166953,
              lng: -0.20946200000000692,
            }
      );
      setZoom(16);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // const libraries: GoogleMapLibrary[] = ["places"];

  // const googlePlaces = new google.maps.places.PlacesService(map);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.currentTarget.value);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map.fitBounds(bounds));
  }, []);

  const onClick = useCallback((props: google.maps.MapMouseEvent) => {
    //@ts-ignore
    if (props?.placeId) {
      //@ts-ignore
      setPlaceId(props.placeId);
      setMarker(props.latLng.toJSON());
    }
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const handleLoad = (searchBox: google.maps.places.SearchBox) =>
    setSearchBox(searchBox);

  const handlePlacesChanged = () => {
    const location = searchBox?.getPlaces()[0].geometry?.location;
    if (location) {
      setMarker({ lat: location.lat(), lng: location.lng() });
      setCenter({ lat: location.lat(), lng: location.lng() });
    }
  };

  return (
    // <LoadScript
    //   language="en"
    //   id="script-loader"
    //   googleMapsApiKey={GOOGLE_API_KEY}
    //   libraries={libraries}
    // >
    <GoogleMap
      mapContainerStyle={{ width: "80vw", height: "700px" }}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onClick}
    >
      <StandaloneSearchBox
        onLoad={handleLoad}
        onPlacesChanged={handlePlacesChanged}
      >
        <Input
          borderRadius={5}
          placeholder=""
          marginTop={9}
          value={searchValue}
          onChange={onChangeHandler}
        />
      </StandaloneSearchBox>
      {marker && (
        <Marker onClick={() => setMarker(null)} position={marker} clickable />
      )}
    </GoogleMap>
    // </LoadScript>
  );
};
