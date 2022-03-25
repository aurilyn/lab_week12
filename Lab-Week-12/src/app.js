function selectSomething(){
    const selectEle = document.querySelector('div')
    return selectEle
}
console.log(selectSomething())

// part 2: Creating a new array with different keys based on another array

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
]
const studentsScholarship = []

function getAvg(student){
    let totalGrade = 0
    for (let grades of student.grades) {
        totalGrade += grades
    }
    return gradeTotal
}
function NewList(student, gradeAvg){
    if (gradeAvg >= 80){
        studentsScholarship.push({
            name: student.name, gradeAvg: gradeAvg
        })
    }
}
function makeList(studentList){
    let gradeAvg = 0
    for (let student of studentList) {
        let gradeAvg = getAvg(student) / student.grades.length
        addToNewList(student, gradeAvg)
    }
    return studentsScholarship
}

makeList(students)

console.log(studentsScholarship)


function darkmode(){
    const darkm = document.querySelector(".container");
    darkm.classList.replace("light-theme", 'dark-theme');
}

function lightmode(){
    const lightm = documents.querySelector(".container");
    lightm.classList.replace("dark-theme", "light-theme");
}

lightmode()
darkmode()