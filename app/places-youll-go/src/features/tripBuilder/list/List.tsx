import type { Place } from "@/entities/Place"

export const List = ({
  placeData,
}: {
  placeData: Place[]
}): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Place</th>
        </tr>
      </thead>
      <tbody>
        {placeData.map(
          ({
            image,
            description,
            id,
          }: {
            image: string
            description: string
            id: number
          }) => (
            <tr key={id}>
              <td>
                <img src={image} alt="junk"/>
              </td>
              <td>{description}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  )
}
