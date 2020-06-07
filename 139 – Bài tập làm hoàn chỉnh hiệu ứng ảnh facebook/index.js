addEventListener('DOMContentLoaded',function() {
    // console.log('Da chay roi');
    var anhs = document.querySelectorAll('.cacAnh img');
    // console.log(anh);
    var nenDen = document.querySelector('.nenden');
    var dongLai = document.querySelector('.dongLai');
    var thongTinAnh = document.querySelector('.thongtinanh');
    var khoiCacAnhLis = document.querySelectorAll('.khoiCacAnh ul li');
    var nphai = document.querySelector('.nphai');
    var ntrai = document.querySelector('.ntrai');
    var thuTuCuaActive = 0;


    // console.log(khoiCacAnhLis);
    
    // khi click vao nut dong
    // dongLai.addEventListener('click', function(){
    //     // console.log('dongLai');
    //     nenDen.classList.remove('ra');
    //     thongTinAnh.classList.remove('ra');
    //     var anhActive = document.querySelector(".khoiCacAnh ul li.active");
    //     // console.log(anhActive);
        
    //     anhActive.classList.remove("active");
    // })

    // khi click vao nen den no cung dong
    nenDen.addEventListener("click", function () {
      // console.log('dongLai');
        this.classList.remove("ra");
        thongTinAnh.classList.remove("ra");
        var anhActive = document.querySelector(".khoiCacAnh ul li.active");
        anhActive.classList.remove('active');
      
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
            // console.log(chiSo);
            thuTuCuaActive = chiSo;
            // in ra phan tu duoc active
            khoiCacAnhLis[chiSo].classList.add('active');
            
        })
    }

    var hienTai2 = thuTuCuaActive;
    nphai.addEventListener('click',function (){
        // console.log('click phai');
        console.log('chi so cua phan tu dang duoc hien thi: '+ thuTuCuaActive);
        console.log('so buc anh: '+ khoiCacAnhLis.length);

        //xac dinh phan tu tiep theo 

        var soLuongAnh = khoiCacAnhLis.length;
        // if(thuTuCuaActive < soLuongAnh - 1){
        //     thuTuCuaPhanTuTiepTheo = thuTuCuaActive + 1; 
        // }else{
        //     thuTuCuaPhanTuTiepTheo = 0;
        // }


        var phanTuHienTai = khoiCacAnhLis[hienTai2];
        hienTai2 = (hienTai2 < soLuongAnh - 1) ? (hienTai2 + 1) : 0;

        var phanTuTiepTheo = khoiCacAnhLis[hienTai2];
        
        phanTuHienTai.classList.remove("active");
        phanTuTiepTheo.classList.add("active");
    })


    ntrai.addEventListener("click", function () {
      // console.log('click phai');
      console.log("chi so cua phan tu dang duoc hien thi: " + thuTuCuaActive);
      console.log("so buc anh: " + khoiCacAnhLis.length);

      //xac dinh phan tu tiep theo

      var soLuongAnh = khoiCacAnhLis.length;
      // if(thuTuCuaActive < soLuongAnh - 1){
      //     thuTuCuaPhanTuTiepTheo = thuTuCuaActive + 1;
      // }else{
      //     thuTuCuaPhanTuTiepTheo = 0;
      // }

      var phanTuHienTai = khoiCacAnhLis[hienTai2];
      hienTai2 = hienTai2 > 0 ? hienTai2 - 1 : soLuongAnh - 1;

      var phanTuTiepTheo = khoiCacAnhLis[hienTai2];

      phanTuHienTai.classList.remove("active");
      phanTuTiepTheo.classList.add("active");
    });
    
}, false);