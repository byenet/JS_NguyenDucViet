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
    
    var khoangCachHienThi = 2000;
    var chanCuoi = viTriKhoiVang + khoangCachHienThi
    console.log(chanCuoi);

    // hieu ung load bang javascript
    var phanTuLoad = document.querySelector('.s3');
    // console.log(phanTuLoad);
    var trangThaiS3 = 'duoi';
    var viTriS3 = phanTuLoad.offsetTop - 650;
    

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
        if ((window.pageYOffset > viTriKhoiVang) && (window.pageYOffset < chanCuoi)) {
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


        // nut back to top

        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          //nếu lớn hơn 20px thì hiện button
          document.getElementById("myBtn").style.display = "block";
        } else {
          //nếu nhỏ hơn 20px thì ẩn button
          document.getElementById("myBtn").style.display = "none";
        }


        // Xu ly hieu ung load
        if(window.pageYOffset > viTriS3){
          if(trangThaiS3 == 'duoi'){
            trangThaiS3 = 'tren';
            phanTuLoad.classList.add('dilen');
          }
        }

    })

     //gán sự kiện click cho button
    document.getElementById('myBtn').addEventListener("click", function () {
        //Nếu button được click thì nhảy về đầu trang
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

},false);
