import {CourseType} from "./04";


test("take persons that are older then 90 years old", ()=>{
    const ages:Array<number> = [12, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90 )


    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test("should take courses that are cheaper 160", ()=>{
    const courses: Array<CourseType> = [
        {title: "css", price: 100},
        {title: "js", price: 200},
        {title: "react", price: 150},
    ]


    const cheapCourses= courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("css");
    expect(cheapCourses[1].title).toBe("react");

})

test("get only completed tasks" ,()=>{
const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Salt", isDone: false},
    {id: 4, title: "Sugar", isDone: true},
]


    const completedTaks = tasks.filter(tasks => tasks.isDone)

    expect(completedTaks.length).toBe(2);
    expect(completedTaks[0].title).toBe("Milk");
    expect(completedTaks[1].title).toBe("Sugar");


})