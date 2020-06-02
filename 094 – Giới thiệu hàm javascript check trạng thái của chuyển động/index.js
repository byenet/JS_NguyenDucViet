document.addEventListener('DOMContentLoaded',function (){

    var nut = document.querySelector('.n1'),
        khoi = document.querySelector('.khoi');

    khoi.addEventListener("webkitAnimationEnd", function () {
      console.log("ket thuc chuyen dong xong làm gì thì làm");
      this.classList.add("dixuong");
    });

    nut.addEventListener('click',function () {
        khoi.classList.add('chuyendong');
    })

},false);