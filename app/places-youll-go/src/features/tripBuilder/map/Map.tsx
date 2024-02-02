import { useRef, useEffect, useState } from "react"

import mapboxgl from "mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css"

import mapCss from "./Map.module.css"
import { PlaceApiResponse } from "../tripBuilderApiSlice"

mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN

export const Map = ({ placeData }: { placeData: PlaceApiResponse }): JSX.Element => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  // Component state should be lifted in to Redux instead
  const [lng, setLng] = useState(-77.01)
  const [lat, setLat] = useState(38.9)
  const [zoom, setZoom] = useState(9)
  const [places, _] = useState(placeData.users)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    })
    map.current.on("move", () => {
      setLng(map.current!.getCenter().lng)
      setLat(map.current!.getCenter().lat)
      setZoom(map.current!.getZoom())
    })

    map.current.on("load", () => {
     places.forEach(place => {
        const _ = new mapboxgl.Marker().setLngLat([place.address.coordinates.lng,place.address.coordinates.lat]).addTo(map.current!)
      });
    })
  })

  return <div ref={mapContainer} className={mapCss.mapContainer} />
}
