// B1 Truy xuat cai nut
// truoc khi truy xuat phai document ready

document.addEventListener('DOMContentLoaded', function(){
    // dung code
    var nut = document.getElementById('nut1');
    console.log(nut);

    var khoi = document.getElementsByClassName('card');
    console.log(khoi[0]);
    

    // goi su kien click
    nut.onclick = function(){
        console.log('click duoc chua');
        khoi[0].classList.toggle('diphai')
    }
    
},false);