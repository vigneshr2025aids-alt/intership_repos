var vignesh = 10
var vignesh = 11
console.log(vignesh)

let c = 22
{
    let c = 30
}



let arr = [10, 20, 30, 40]
const doublearr = arr.map((n) => n * 2)
console.log(doublearr)

const students = [
    { name: "Shamil", marks: 65, email: "shamil.csd@example.com" },
    { name: "Vijai", marks: 58, email: "vijai.csd@example.com" },
    { name: "Vignesh", marks: 88, email: "vignesh.csd@example.com" },
    { name: "Shamil S", marks: 62, email: "shamil.s.csd@example.com" },
    { name: "Shamil J", marks: 87, email: "shamil.j.csd@example.com" }
]

const below70 = students.filter((student) => student.marks < 70)
const above70 = students.filter((student) => student.marks >= 70)

below70.map((student) => console.log(`${student.name}: ${student.marks}`))
above70.map((student) => console.log(`${student.name}: ${student.marks}`))

const foundStudent = students.find((student) => student.name === "Vignesh")
console.log(`${foundStudent.name}: ${foundStudent.marks}`)

const totalMarks = students.reduce((total, student) => total + student.marks, 0)
console.log(`Total marks: ${totalMarks}`)


// PROMISES: To make the code work aynchronous 

const foodOrder = new Promise((resolve, reject) => {
    let foodReady = true
    if(foodReady){
        resolve("Food is ready!")
    }
    else{
        reject("Food is not ready yet.")
    }
})

foodOrder
    .then((message) => console.log(message))
    .catch((error) => console.log(error))

//async and await: To make the code work aynchronous

async function orderFood() {
    try {
        const message = await foodOrder;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

async function getUsers(){
    console.log("fetching users");
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = response.json()
    console.log(data);
}

async function printStudentEmails() {
    for (const student of students) {
        await Promise.resolve()
        console.log(student.email)
    }
}
printStudentEmails()

//GitHub: verssion control

