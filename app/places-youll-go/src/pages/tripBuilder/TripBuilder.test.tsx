import { screen } from "@testing-library/react"
import { vi } from "vitest"
import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"
import { TripBuilder } from "./TripBuilder"
import { renderWithProviders } from "@/shared/test-utils"
import type { TripBuilderState } from "./tripBuilderSlice"
import { TripBuilderViewType } from "./tripBuilderSlice"

vi.mock("@/features/map/Map", () => {
  return { Map: (_: any) => <div data-testid="Map" /> }
})

vi.mock("@/features/list/List", () => {
  return { List: (_: any) => <div data-testid="List" /> }
})

const server = setupServer(
  http.get("https://dummyjson.com/users/filter", () => {
    return HttpResponse.json({})
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const mapBuilderState: TripBuilderState = {
  viewType: TripBuilderViewType.Map,
  numberOfPlacesToLoad: 30,
}

const listBuilderState: TripBuilderState = {
  viewType: TripBuilderViewType.List,
  numberOfPlacesToLoad: 30,
}

test("App should have correct initial render with map view type", async () => {
  renderWithProviders(<TripBuilder />, {
    preloadedState: { tripBuilder: mapBuilderState },
  })

  await mapIsSelected()
})

test("App should have correct initial render with list view type", async () => {
  renderWithProviders(<TripBuilder />, {
    preloadedState: { tripBuilder: listBuilderState },
  })

  await listIsSelected()
})

test("App should have correct render after selecting map", async () => {
  const { user } = renderWithProviders(<TripBuilder />, {
    preloadedState: { tripBuilder: listBuilderState },
  })
  await screen.findByText("Map")
  await user.click(screen.getByText("Map"))

  await mapIsSelected()
})

test("App should have correct render after selecting list", async () => {
  const { user } = renderWithProviders(<TripBuilder />, {
    preloadedState: { tripBuilder: mapBuilderState },
  })

  await screen.findByText("List")
  await user.click(screen.getByText("List"))

  await listIsSelected()
})

async function mapIsSelected(): Promise<void> {
  await screen.findByTestId("Map")

  expect(screen.getByRole("tab", { selected: true })).toHaveTextContent("Map")
  expect(screen.getByRole("tab", { selected: false })).toHaveTextContent("List")
}

async function listIsSelected(): Promise<void> {
  await screen.findByTestId("List")

  expect(screen.getByRole("tab", { selected: true })).toHaveTextContent("List")
  expect(screen.getByRole("tab", { selected: false })).toHaveTextContent("Map")
}
