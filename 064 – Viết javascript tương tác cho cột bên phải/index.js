document.addEventListener('DOMContentLoaded',function (){
    // khai bao bien can dung 
    var menuDo = document.querySelector('.menu');
    // console.log(menuDo);
    var trangThaiMenuDo = 'duoi100'; // duoi banner

    var chungToi = document.querySelector('.chungtoi');
    // console.log(chungToi);
    
    console.log(chungToi.offsetTop);
    // lay vi tri chua chungToi so voi top
    var viTriKhoiVang = chungToi.offsetTop;
    var trangThaiKhoiVang = 'duoi';
    

    window.addEventListener('scroll',function(){
        // console.log(window.pageYOffset);

        // xu ly cho navbar
        if(window.pageYOffset > 100){
            if(trangThaiMenuDo === 'duoi100'){
                trangThaiMenuDo = 'tren100';
                menuDo.classList.add('menuden');
            }
        } else {
             if (trangThaiMenuDo === "tren100") {
               trangThaiMenuDo = "duoi100";
               menuDo.classList.remove("menuden");
             }
        }

        // xu ly cho khoi vang
        if (window.pageYOffset > viTriKhoiVang) {
          if (trangThaiKhoiVang === "duoi") {
            trangThaiKhoiVang = "dangHienThi";
            chungToi.classList.add("vangFix");
          }
        } else {
          if (trangThaiKhoiVang === "dangHienThi") {
            trangThaiKhoiVang = "duoi";
            chungToi.classList.remove("vangFix");
          }
        }
    })
    
},false);
