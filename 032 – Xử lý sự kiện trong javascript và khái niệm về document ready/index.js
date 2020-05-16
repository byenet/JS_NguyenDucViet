document.addEventListener("DOMContentLoaded",function (){
    // code o day
},false);

document.addEventListener("DOMContentLoaded",function(){
    var x1 = document.getElementById('n1');
    console.log(x1);
    x1.onclick = function(){
        console.log('Ban vua click vao '+ x1);
        x1.classList.toggle("btn-outline-info");
        x1.classList.toggle("btn-danger")
        x1.classList.toggle('dixuong');
    }
},false);