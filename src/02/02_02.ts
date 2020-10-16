export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id? : number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type govermentBuildings = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    id? : number
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<govermentBuildings>
    citizensNumber: number
}

