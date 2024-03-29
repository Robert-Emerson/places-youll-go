import { List } from "@/features/list/List"
import { Map } from "@/features/map/Map"
import tripBuilder from "./TripBuilder.module.css"
import { useAppDispatch, useAppSelector } from "@/shared/hooks"

import {
  setMapView,
  setListView,
  setPlacesToLoad,
  isListView,
  selectPlacesToLoad,
} from "./tripBuilderSlice"
import { useGetFlickrPlacesQuery } from "./tripBuilderApiSlice"

export const TripBuilder = () => {
  const dispatch = useAppDispatch()
  const useList: boolean = useAppSelector(isListView)
  const numberOfPlaces: number = useAppSelector(selectPlacesToLoad)
  const { data, isError, isLoading, isSuccess } =
    useGetFlickrPlacesQuery(numberOfPlaces)

  const options = [10, 20, 50]
  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className={tripBuilder.container}>
        <div className={tripBuilder.viewSelect} role="tablist">
          <button
            role="tab"
            onClick={() => dispatch(setMapView())}
            className={!useList ? tripBuilder.active : ""}
            aria-selected={!useList}
          >
            Map
          </button>
          |
          <button
            role="tab"
            onClick={() => dispatch(setListView())}
            className={useList ? tripBuilder.active : ""}
            aria-selected={useList}
          >
            List
          </button>
        </div>
        <div>
          <h3>Select the number of places to load:</h3>
          <select
            value={numberOfPlaces}
            onChange={e => {
              dispatch(setPlacesToLoad(Number(e.target.value)))
            }}
          >
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* TODO: Downstream components need to actually read placeData from Redux/interact with that store; not have data passed in*/}
        {useList ? <List placeData={data} /> : <Map placeData={data} />}
      </div>
    )
  }
}
