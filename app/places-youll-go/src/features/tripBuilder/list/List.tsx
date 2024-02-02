import type { PlaceApiResponse } from "@/features/tripBuilder/tripBuilderApiSlice"

export function List({ placeData }: { placeData: PlaceApiResponse }): JSX.Element {

  console.log(placeData)
  return (
    <table>
      <thead>
      <tr>
        <th>Image</th>
        <th>Place</th>
      </tr>
      </thead>
      <tbody>
      {
        placeData.users.map(({ image, lastName, id }: { image: string, lastName: string, id: number }) => (
          <tr key={id}>
            <td><img src={image} /></td>
            <td>{lastName}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}
