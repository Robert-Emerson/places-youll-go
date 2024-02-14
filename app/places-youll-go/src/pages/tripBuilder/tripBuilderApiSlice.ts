// TODO: much of this is written to use dummyjson. properties will need to be adapted to use Flickr API
import { Place } from "@/entities/Place"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const flickrApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users/filter" }),
  reducerPath: "flickrApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["FlickrPlaces"],
  endpoints: build => ({
    // Supply generics for the return type (in this case `QuotesApiResponse`)
    // and the expected query argument. If there is no argument, use `void`
    // for the argument type instead.
    getFlickrPlaces: build.query<Place[], number>({
      query: limit =>
        `?key=address.state&value=DC&select=address,image,id,lastName&limit=${limit}`, // TODO: fake parameters for now
      // `providesTags` determines which 'tag' is attached to the
      // cached data returned by the query.
      providesTags: (result, error, id) => [{ type: "FlickrPlaces", id }],
      transformResponse: (response: PlaceApiResponseWrapper, meta, arg) => {
        return response.users?.map(responseItem =>
          MapApiReponseToEntity(responseItem),
        )
      },
    }),
  }),
})

// Hooks are auto-generated by RTK-Query
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetFlickrPlacesQuery } = flickrApiSlice

interface LatLongCoords {
  lat: number
  lng: number
}

interface Address {
  coordinates: LatLongCoords
}

interface PlaceApiResponse {
  id: number
  image: string
  lastName: string
  address: Address
}

interface PlaceApiResponseWrapper {
  users: PlaceApiResponse[]
  total: number
  skip: number
  limit: number
}

function MapApiReponseToEntity(response: PlaceApiResponse): Place {
  return {
    id: response.id,
    description: response.lastName,
    image: response.image,
    coordinates: response.address.coordinates,
  }
}
