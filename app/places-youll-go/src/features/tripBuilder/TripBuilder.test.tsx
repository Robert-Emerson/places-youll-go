import { screen, waitFor } from "@testing-library/react"
import { vi } from "vitest"
import { TripBuilder } from "./TripBuilder"
import { renderWithProviders } from "@/shared/test-utils"
import { TripBuilderViewType } from "./tripBuilderSlice"

vi.mock('@/features/map/Map', () => {
    return { Map: () => <div role="Map" /> };
})

vi.mock('@/features/list/List', () => {
    return { List: () => <div role="List" /> };
})

test("App should have correct initial render with map view type", () => {
    renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: { viewType: TripBuilderViewType.Map } } });

    mapIsSelected();
})


test("App should have correct initial render with list view type", () => {
    renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: { viewType: TripBuilderViewType.List } } });

    listIsSelected();
})

test("App should have correct render after selecting map", async () => {
    const { user } = renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: { viewType: TripBuilderViewType.List } } });

    await user.click(screen.getByText("Map"));

    mapIsSelected();
})

test("App should have correct render after selecting list", async () => {
    const { user } = renderWithProviders(<TripBuilder />, { preloadedState: { tripBuilder: { viewType: TripBuilderViewType.Map } } });

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