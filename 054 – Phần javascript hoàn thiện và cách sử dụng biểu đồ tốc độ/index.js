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
    

    // Khi click vao nut xanh
    nut.onclick = function(){
        den.classList.add('len');

        // cho ca khoi to dich sang phai
        khoiTo.classList.add('dichphai');

    }
    
    den.onclick = function(){
        den.classList.remove('len');
        khoiTo.classList.remove('dichphai');
        
    }
    
    

},false);