let user = localStorage.getItem("user");
user = JSON.parse(user);
function readUser () {
    let UserHTML = "";
    for (let i=0; i < user.length; i++) {
        UserHTML += `
        <div class="receipt">
            <ul class="bill">
                <li class="bill-name">Name: ${user[i].name} </li>
                <li class="bill-email">Email: ${user[i].email}</li>
                <li class="bill-phone">Phone Number: ${user[i].phonenumber}</li>
                <li class="bill-date">Date(mm/dd/yyyy): ${user[i].date}</li>
                <li class="bill-noadult">Number of adult: ${user[i].numadult}</li>
                <li class="bill-nochildren">Number of children: ${user[i].numchildren}</li>
            </ul>
        </div>`   
    }
    document.getElementById("receipt-container").innerHTML = UserHTML;
}
readUser();