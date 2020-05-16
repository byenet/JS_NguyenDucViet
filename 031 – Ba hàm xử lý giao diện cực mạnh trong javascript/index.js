var x1 = document.querySelectorAll('.n1');
console.log(x1);
console.log(x1[0].classList);
console.log(x1[0].classList[1]);

x1[0].classList.remove('btn-outline-info');
x1[0].classList.add('btn-block','btn-warning','my-5');

var x3 = document.getElementsByClassName('n3');
// toggle neu da co class thi remove con chua co thi add them vao.
x3[0].classList.toggle('btn')
x3[0].classList.toggle('btn-block')

