document.addEventListener('DOMContentLoaded',function (){

    // bien dung chung
    var nutPhai = document.querySelector('.nuts b.phai');
    // console.log(nutPhai);
    var nutTrai = document.querySelector('.nuts b.trai');
    // console.log(nutTrai);
    var slides = document.querySelectorAll('.slides ul li');
    // console.log(slides);
    var chiSoHienTai = 0;
    var soLuongSlide = slides.length;
    // console.log(soLuongSlide);

    var trangThai = 'dangDungYen';


    function xacDinh2SlideVaChuyenDong(nutNao){

        // kiem tra luon trang thai
        if(trangThai === 'dangChuyenDong') {
            // dung chuong trinh
            return false;
        }
        trangThai = 'dangChuyenDong';
        var trangThaiCua2ChuyenDong = 0;

        var phanTuHienTai = slides[chiSoHienTai];


        if(nutNao === 'nutTrai'){
            console.log('code xu ly cho nut trai');

            // Phan tu tiep theo
            if(chiSoHienTai > 0){
                chiSoHienTai--;
            }else{
                // dang o phan tu dau tien, ko lui duoc nua thi cho chuyen sang phan tu cuoi cung
                chiSoHienTai = soLuongSlide-1;
            }
        }
        else if(nutNao === 'nutPhai'){
            console.log("code xu ly cho nut phai");
            // Phan tu tiep theo
            if(chiSoHienTai < soLuongSlide - 1 ){ // chua den cuoi
            chiSoHienTai ++;
            }else{ // la phan tu cuoi cung roi
                chiSoHienTai = 0;
            }
        }
        var phanTuTiepTheo = slides[chiSoHienTai];

        // endAnimation check
        
        var xuLyHienTaiKetThucCD = function (){
            console.log('slide hien tai da xong roi do');
            console.log(this);
            
            this.classList.remove("dangxem");

            if(nutNao === 'nutTrai'){
                 this.classList.remove("bienMatKhiAnPrev");
            }else if(nutNao === 'nutPhai'){
                this.classList.remove("bienMatKhiAnNext");
            }

            trangThaiCua2ChuyenDong++; // = 1
            if(trangThaiCua2ChuyenDong === 2){
                trangThai = 'dangDungYen';
            }
        }

        var xuLyTiepTheoKetThucCD = function (){
            console.log('slide tiep theo da xong roi do');
            console.log(this);
            
            this.classList.add('dangxem');
             if (nutNao === "nutTrai") {
                this.classList.remove("diVaoKhiAnPrev");
             } else if (nutNao === "nutPhai") {
                this.classList.remove("diVaoKhiAnNext");
             }

            trangThaiCua2ChuyenDong++; // = 2
            if (trangThaiCua2ChuyenDong === 2) {
              trangThai = "dangDungYen";
            }
        }


        phanTuHienTai.addEventListener(
          "webkitAnimationEnd",
          xuLyHienTaiKetThucCD
        );

        phanTuTiepTheo.addEventListener(
          "webkitAnimationEnd",
          xuLyTiepTheoKetThucCD
        );

        
        // Khi chuyen dong
        if(nutNao === 'nutTrai'){
            phanTuHienTai.classList.add("bienMatKhiAnPrev");
            phanTuTiepTheo.classList.add("diVaoKhiAnPrev");
        } else if(nutNao === 'nutPhai'){
            phanTuHienTai.classList.add("bienMatKhiAnNext");
            phanTuTiepTheo.classList.add("diVaoKhiAnNext");
        }
    }

    // var chuyenSlideChoNutPhai = function(){
    //     xacDinh2SlideVaChuyenDong("nutPhai");
    // };

    // var chuyenSlideChoNutTrai = function (){
    //     xacDinh2SlideVaChuyenDong('nutTrai');
    // }

    nutPhai.addEventListener('click', function(){
        xacDinh2SlideVaChuyenDong("nutPhai");
    });

    nutTrai.addEventListener('click', function(){
        xacDinh2SlideVaChuyenDong("nutTrai");
    });

},false);

