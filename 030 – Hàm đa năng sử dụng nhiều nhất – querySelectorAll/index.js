var a = document.querySelectorAll(".card-columns .card");

console.log(a); // a la 1 mang array()

console.log(a[1]);

for (var i = 0; i< a.length; i++){
    if(i===2){
        console.log(a[i]);
        a[i].innerHTML = 'phan tu duoc chon';
    }
}

var b = document.querySelectorAll('#nd');
console.log(b[0]);

var c = document.querySelectorAll('[data-thongBao]');
console.log(c[0]);

var d = document.querySelectorAll('.card-columns .card:first-child')
console.log(d);
