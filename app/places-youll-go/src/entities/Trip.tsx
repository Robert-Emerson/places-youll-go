import { v4 as uuidv4} from 'uuid'

import { Place } from "@/entities/Place"

export interface Trip
{
    id: string
    places: Place[]
}

export class TripFactory
{
    static CreateTrip() : Trip{
        return { id: uuidv4(), places: []}
    }
}