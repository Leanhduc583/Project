// function chuvi(a,b){
//     return (a + b)*2;
// }
// function dientich(a,b){
//     return a * b;
// }
// let a = parseInt(prompt("Nhập chiều dài"))
// let b = parseInt(prompt("Nhập chiều rộng"))

// let tong = chuvi(a,b);
// document.write("Chu vi của hình chữ nhật là: " + tong ) 

// let tich = dientich(a,b);
// document.write("Diện tích của hình chữ nhật là: " + tich)





function chuvi(a,b,c){
    return (a+b+c)/2;
}
function dientich(p,a,b,c){
   Math.sqrt(p(p-a)(p-c)(p-b));
}
let a = parseInt(prompt("Nhập cạnh 1"));
let b = parseInt(prompt("Nhập cạnh 2"));
let c = parseInt(prompt("Nhập cạnh 3"));
let p = chuvi(a,b,c);

let s = dientich(p,a,b,c);
document.write("Diện tích của hình tam giác là: " + s)






