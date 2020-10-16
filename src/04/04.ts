const ages = [12, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100] // >90

export type CourseType = {
    title: string
    price: number
}

const courses: Array<CourseType> = [
    {title: "css", price: 100},
    {title: "js", price: 200},
    {title: "react", price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160

}

const chipCourses = [];

