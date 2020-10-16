import {createGreetingMessage} from "./05_01";

export type ManType = {
    name: string
    age: number
}

let people: Array<ManType> = [];

beforeEach(()=>{
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Aleksandr Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]

})

test("should get array of greeting messages", ()=>{

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT_INCUBATOR")
    expect(messages[1]).toBe("Hello Aleksandr. Welcome to IT_INCUBATOR")
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT_INCUBATOR")


})