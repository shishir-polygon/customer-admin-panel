export default interface IGooglePlaceProps {
  setPlaceId: (placeId: string) => void;
  previewMode?: boolean;
  // @ts-ignore
  coordinates?: LatLngLiteral;
}
