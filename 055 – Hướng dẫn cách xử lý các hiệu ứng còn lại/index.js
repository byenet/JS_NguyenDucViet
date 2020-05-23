document.addEventListener('DOMContentLoaded', function() {

    // Khai bao cac bien can dung
    var nut = document.querySelector('.nut');
    // console.log(nut);
    var menuTrai = document.querySelector('.menutrai');
    // console.log(menuTrai);
    var den = document.querySelector('.den');
    // console.log(den);
    var khoiTo = document.querySelector('.noidungto');
    // console.log(khoiTo);
    var trang = document.querySelector('.mautrang');
    // console.log(trang);
    
    // Khi click vao nut xanh
    nut.onclick = function(){
        den.classList.add('len');

        trang.classList.add('trangquay');
        menuTrai.classList.remove('vetrai')
    }
    
    den.onclick = function(){
        den.classList.remove('len');
        trang.classList.remove("trangquay");
        menuTrai.classList.add("vetrai");
    }
    
},false);