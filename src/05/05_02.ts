import {govermentBuildings, HouseType} from "../02/02_02";


export function getStretsTitlesOfGovermentBuildings(buildings: Array<govermentBuildings>) {
    return buildings.map(b => b.address.street.title)
}

export const getStretsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}


export function createMessages(houses: Array<HouseType>) {


    let callbackfn = (h: HouseType) => {
        debugger;
        return `Hello guys from ${h.address.street.title}`
    }

    let newArray = houses.map(callbackfn)

    return newArray


}