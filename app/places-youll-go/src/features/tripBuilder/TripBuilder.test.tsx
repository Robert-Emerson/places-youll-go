import { screen, waitFor } from "@testing-library/react"
import { vi } from "vitest"
import { TripBuilder } from "./TripBuilder"
import { renderWithProviders } from "@/shared/test-utils"
import { TripBuilderState, TripBuilderViewType } from "./tripBuilderSlice"

vi.mock('@/features/map/Map', () => {
    return { Map: () => <div role="Map" /> };
})

vi.mock('@/features/list/List', () => {
    return { List: () => <div role="List" /> };
})

const mapBuilderState: TripBuilderState = {
    viewType: TripBuilderViewType.Map,
    numberOfPlacesToLoad: 30
}

const listBuilderState: TripBuilderState = {
    viewType: TripBuilderViewType.List,
    numberOfPlacesToLoad: 30
}

test("App should have correct initial render with map view type", () => {
    renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: mapBuilderState } });

    mapIsSelected();
})


test("App should have correct initial render with list view type", () => {
    renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: listBuilderState } });

    listIsSelected();
})

test("App should have correct render after selecting map", async () => {
    const { user } = renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: listBuilderState } });

    await user.click(screen.getByText("Map"));

    mapIsSelected();
})

test("App should have correct render after selecting list", async () => {
    const { user } = renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: mapBuilderState } });

    await user.click(screen.getByText("List"));

    listIsSelected();
})

function mapIsSelected(): void {
    expect(screen.getByRole("Map")).toBeInTheDocument()

    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent("Map");
    expect(screen.getByRole('tab', { selected: false })).toHaveTextContent("List");
}

function listIsSelected(): void {
    expect(screen.getByRole("List")).toBeInTheDocument()

    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent("List");
    expect(screen.getByRole('tab', { selected: false })).toHaveTextContent("Map");
}