import type { PayloadAction} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"

export enum TripBuilderViewType {
  Map = "map",
  List = "list",
}

export interface TripBuilderState {
  viewType: TripBuilderViewType
  numberOfPlacesToLoad: number
}

const initialState: TripBuilderState = {
  viewType: import.meta.env.VITE_DEFAULT_VIEW ?? TripBuilderViewType.Map,
  numberOfPlacesToLoad: 10,
}

export const tripBuilderSlice = createSlice({
  name: "tripBuilder",
  initialState,
  reducers: create => ({
    setMapView: create.reducer(state => {
      state.viewType = TripBuilderViewType.Map
    }),
    setListView: create.reducer(state => {
      state.viewType = TripBuilderViewType.List
    }),
    setPlacesToLoad: create.reducer((state, action: PayloadAction<number>) => {
      state.numberOfPlacesToLoad = action.payload
    }),
  }),
  selectors: {
    isListView: tripBuilder =>
      tripBuilder.viewType === TripBuilderViewType.List,
    selectPlacesToLoad: tripBuilder => tripBuilder.numberOfPlacesToLoad,
  },
})

export const { setMapView, setListView, setPlacesToLoad } =
  tripBuilderSlice.actions

export const { isListView, selectPlacesToLoad } = tripBuilderSlice.selectors
