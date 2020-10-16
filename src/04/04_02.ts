import {CityType, govermentBuildings} from "../02/02_02";

export function demolishHOuseOnTheStreet(city: CityType, Street: string) {

    city.houses = city.houses.filter(h => h.address.street.title !== Street)
}

export const getBuildingsWithStaffCountGreaterThen = (building: Array<govermentBuildings>, number: number) => {

    return building.filter(building => building.staffCount > number)
}