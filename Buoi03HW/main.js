//Bai 1
document.getElementById("submit").onclick = function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;

    const person = {
        name: name,
        email: email,
        age: age,
        phone: phone,
    }


    localStorage.setItem('Thongtin', JSON.stringify(person))
    alert("Saved")
}


//Bai 2
let color = "black"

document.getElementById("changecolor").style.cursor = "pointer";
document.getElementById("changecolor").onclick = function () {
    if (color == "black") {
        document.getElementById("changecolor").style.color = "red";
        color = "red"
    } else {
        document.getElementById("changecolor").style.color = "black";
        color = "black"
    }
}


//Bai 3
const users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
];

const listName = [];

for (let i = 0; i < users.length; i++) {
     listName.push(users[i].name);
    }

console.log(listName)
