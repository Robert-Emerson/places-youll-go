import { useRef, useEffect, useState } from "react"

import mapboxgl from "mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css"

import mapCss from "./Map.module.css"

mapboxgl.accessToken = import.meta.env.VITE_MAP_ACCESS_TOKEN

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng, setLng] = useState(-77.4)
  const [lat, setLat] = useState(37.5)
  const [zoom, setZoom] = useState(9)
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
  })
  return <div ref={mapContainer} className={mapCss.mapContainer} />
}
