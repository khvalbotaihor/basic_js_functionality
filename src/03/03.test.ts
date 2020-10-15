import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(()=>{
    student = {
        id: 1,
        name: "Dimich",
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
})

test("new tech skill should be added",()=>{

    addSkill(student, "Jqueary")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("Jqueary")
    expect(student.technologies[3].id).toBeDefined();


})

test("student should be active",()=>{
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)



})

test("Does student lives in city",()=>{
    expect(student.isActive).toBe(false)

    let result1 = doesStudentLiveIn(student, "Moskov")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)



})