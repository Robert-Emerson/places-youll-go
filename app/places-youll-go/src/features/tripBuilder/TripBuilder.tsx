import { List } from "@/features/list/List"
import { Map } from "@/features/map/Map"
import tripBuilder from "./TripBuilder.module.css"
import { useAppDispatch, useAppSelector } from "@/shared/hooks"

import { setMapView, setListView, isListView } from "./tripBuilderSlice"

export const TripBuilder = () => {
  const dispatch = useAppDispatch()
  const useList: boolean = useAppSelector(isListView)

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
      {useList ? <List /> : <Map />}
    </div>
  )
}
