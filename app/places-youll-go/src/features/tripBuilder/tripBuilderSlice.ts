import { createSlice } from "@reduxjs/toolkit"

export enum TripBuilderViewType {
  Map = "map",
  List = "list",
}

export interface TripBuilderState {
  viewType: TripBuilderViewType
}

const initialState: TripBuilderState = {
  viewType: import.meta.env.VITE_DEFAULT_VIEW ?? TripBuilderViewType.Map,
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
  }),
  selectors: {
    isListView: tripBuilder => tripBuilder.viewType === TripBuilderViewType.List,
  },
})

export const { setMapView, setListView } = tripBuilderSlice.actions

export const { isListView } = tripBuilderSlice.selectors
