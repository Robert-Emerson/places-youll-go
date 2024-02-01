import { useState } from "react"

import { List } from "@/features/list/List"
import { Map } from "@/features/map/Map"
import tripBuilder from "./TripBuilder.module.css"

enum ViewType { Map = "map", List = "list" }

export const TripBuilder = () => {
    const [selectedView, setViewType] = useState(import.meta.env.VITE_DEFAULT_VIEW ?? ViewType.Map)
    function onListSelectClick() {
        setViewType(ViewType.List);
    }

    function onMapSelectClick() {
        setViewType(ViewType.Map);
    }

    let useList: boolean = selectedView === ViewType.List;
    return (
        <div className={tripBuilder.container}>
            <div className={tripBuilder.viewSelect}>
                <button onClick={onMapSelectClick} className={!useList ? tripBuilder.active : ""}>Map</button>
                |
                <button onClick={onListSelectClick} className={useList ? tripBuilder.active : ""}>List</button>
            </div>
            {useList ? <List /> : <Map />}
        </div>
    )

}