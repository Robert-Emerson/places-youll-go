import type { AppStore } from "@/app/store"
import { makeStore } from "@/app/store"
import {
    TripBuilderState,
    TripBuilderViewType
} from "./tripBuilderSlice"
import {
    tripBuilderSlice,
    setListView,
    setMapView,
    isListView
} from "./tripBuilderSlice"

interface LocalTestContext {
    store: AppStore
}

describe<LocalTestContext>("counter reducer", it => {
    beforeEach<LocalTestContext>(context => {
        const initialState: TripBuilderState = { viewType: TripBuilderViewType.List }
        const store = makeStore({ tripBuilder: initialState })
        context.store = store
    })

    it("should handle initial state", () => {
        let expectedViewType: TripBuilderViewType = TripBuilderViewType.Map
        if (import.meta.env.VITE_DEFAULT_VIEW)
            expectedViewType = import.meta.env.VITE_DEFAULT_VIEW

        expect(tripBuilderSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
            viewType: expectedViewType,
        })
    })
    it("should handle map change", ({ store }) => {
        // Given
        expect(isListView(store.getState())).toBe(true)

        // When
        store.dispatch(setMapView())

        // Then
        expect(isListView(store.getState())).toBe(false)
    })
    it("should not change with list change", ({ store }) => {
        // Given
        expect(isListView(store.getState())).toBe(true)

        // When
        store.dispatch(setListView())

        // Then
        expect(isListView(store.getState())).toBe(true)
    })
})