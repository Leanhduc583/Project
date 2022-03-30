let user;
if (localStorage.getItem("user") !== null) {
    user = localStorage.getItem("user");
    user = JSON.parse(user);
} else {
    user = [];
}
document.getElementById("form-submit").onclick = function () {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phonenumber = document.getElementById("phone-number").value;
    let date = document.getElementById("date").value;  
    let numadult = document.getElementById("no-adult").value;
    let numchildren = document.getElementById("no-children").value;
    const customer = {
        name: name,
        email: email,
        phonenumber: phonenumber,
        date: date,
        numadult: numadult,
        numchildren: numchildren,
    };   
    if (name == "") {alert("You haven't type your name")} else 
    if (email == "") {alert("You haven't type your email")} else
    if (phonenumber == "") {alert("You haven't type your phone number")} else
    if (date == "") {alert("You haven't choose your date")} else
    {user.push(customer);
    localStorage.setItem("user", JSON.stringify(user));
    alert("Success!");
    window.location.href = "../Thanks/index.html";
    }
}
