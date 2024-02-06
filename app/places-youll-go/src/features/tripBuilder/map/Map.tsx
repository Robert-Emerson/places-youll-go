import { useRef, useEffect, useState } from "react"

import mapboxgl from "mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css"

import mapCss from "./Map.module.css"
import type { Place } from "@/entities/Place"
import { ListItem } from "../list/ListItem"
import ReactDOM from "react-dom"

mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN

export const Map = ({
  placeData,
}: {
  placeData: Place[]
}): JSX.Element => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  // Component state should be lifted in to Redux instead
  const [lng, setLng] = useState(-77.01)
  const [lat, setLat] = useState(38.9)
  const [zoom, setZoom] = useState(9)
  const [places, ] = useState(placeData)

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
        const placeholder = document.createElement('div');
        //TODO: placeholder for actual map popup card
        ReactDOM.render(<ListItem place={place} />, placeholder);
        
        new mapboxgl.Marker()
          .setLngLat([
            place.coordinates.lng,
            place.coordinates.lat,
          ])
          .setPopup(new mapboxgl.Popup({maxWidth: "none"}).setDOMContent(placeholder))
          .addTo(map.current!)
      })
    })
  })

  return <div ref={mapContainer} className={mapCss.mapContainer} />
}
