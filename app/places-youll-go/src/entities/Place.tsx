interface LatLongCoords {
    lat: number
    lng: number
  }
  
  export interface Place {
    id: number
    image: string
    description: string
    coordinates: LatLongCoords
  }