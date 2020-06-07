addEventListener('DOMContentLoaded',function() {
    // console.log('Da chay roi');
    var anhs = document.querySelectorAll('.cacAnh img');
    // console.log(anh);
    var nenDen = document.querySelector('.nenden');
    var dongLai = document.querySelector('.dongLai');
    var thongTinAnh = document.querySelector('.thongtinanh');
    var khoiCacAnhLis = document.querySelectorAll('.khoiCacAnh ul li');
    // console.log(khoiCacAnhLis);
    
    // khi click vao nut dong
    dongLai.addEventListener('click', function(){
        // console.log('dongLai');
        nenDen.classList.remove('ra');
        thongTinAnh.classList.remove('ra');
    })

    // khi click vao nen den no cung dong
    nenDen.addEventListener("click", function () {
      // console.log('dongLai');
      this.classList.remove("ra");
      thongTinAnh.classList.remove("ra");
    });

    for (var i = 0; i < anhs.length; i++) {
        anhs[i].addEventListener('click', function(){
            // console.log('ban vua click vao anh');
            // console.log(this)
            nenDen.classList.add('ra');
            thongTinAnh.classList.add('ra');

            var anhDuocClick = this;
            console.log(anhDuocClick.previousElementSibling);
            
            var chiSo;
            for(chiSo = 0; anhDuocClick = anhDuocClick.previousElementSibling;chiSo++){
            }
            console.log(chiSo);

            // in ra phan tu duoc active
            khoiCacAnhLis[chiSo].classList.add('active');
            
            
        })
    }
    
}, false);