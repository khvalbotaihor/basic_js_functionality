export type CityType = {
    title:string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title:string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}


export const student: StudentType = {
    id: 1,
    name: "Ivan",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        }, {
            id: 2,
            title: "CSS"
        }, {
            id: 3,
            title: "Rect"
        },
    ]
}

console.log(student.age)
console.log(student.address.city)
console.log(student.technologies[2].title)