import type { Place } from "@/entities/Place"
import { ListItem } from "./ListItem"

export const List = ({ placeData }: { placeData: Place[] }) => {
  return (
    <div>
      {placeData.map(place => (
        <ListItem place={place} key={place.id} />
      ))}
    </div>
  )
}
