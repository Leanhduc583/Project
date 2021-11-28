// let number = 10;
// localStorage.setItem("soMuoi", number)

let obj = {
    name: "Đức",
    age: 17
}
obj = JSON.stringify(obj)
localStorage.setItem("Thong tin",obj) 

let soMuoi = localStorage.getItem(obj)
console.log(soMuoi);
soMuoi = JSON.parse(obj);
console.log(soMuoi);
console.log(soMuoi.name);