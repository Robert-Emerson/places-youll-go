import type { Place } from "@/entities/Place"

export const ListItem = ({ place }: { place: Place }) => {
  return (
    <img
      onClick={() => console.log(place)}
      src={place.image}
      alt={place.description}
      id={"img_" + place.id}
      key={place.id}
    />
  )
}
