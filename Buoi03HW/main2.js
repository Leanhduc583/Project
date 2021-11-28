    let Thongtin = localStorage.getItem("Thongtin");
    Thongtin = JSON.parse(Thongtin);
    console.log(Thongtin);


    const In4 = `Name: ${Thongtin.name} Age: ${Thongtin.age} Email: ${Thongtin.email} Phone: ${Thongtin.phone}`;

    document.getElementById("show").onclick = function() {
    document.getElementById("submit").innerHTML = In4;
}
    