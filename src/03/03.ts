import {StudentType} from "../02/02";
import {CityType, govermentBuildings, HouseType} from "../02/02_02";

debugger;
export const sum = (a: number, b:number) =>{
    return a+ b
}

const res1 = sum(sum(1,2), sum(1,3))
const res2 = sum(2,4)


export const addSkill = (st: StudentType, skill: string) =>{
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export function doesStudentLiveIn(s: StudentType, city: string) {
    return s.address.city.title === city
}

export const addMoneyToBudget = (buildings: govermentBuildings, addMoney: number) =>{
buildings.budget += addMoney
}

export function repairHouse(house: HouseType) {
    house.repaired = true
}

export const toFireStaff = (city: govermentBuildings, firedPeople:number) => {
    city.staffCount -= firedPeople
}
export const toHireStaff = (city: govermentBuildings, firedPeople:number) => {
    city.staffCount += firedPeople
}

export const createMessage = (props: CityType) =>{

    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} man`

}