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

            chiSoHienTai = (nutNao === "nutTrai") ? ((chiSoHienTai > 0) ? chiSoHienTai - 1 : soLuongSlide - 1) : ( (chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai+1) : (0));
        
        var phanTuTiepTheo = slides[chiSoHienTai];
        
        var xuLyHienTaiKetThucCD = function (){
            console.log('slide hien tai da xong roi do');
            console.log(this);
            
            this.classList.remove("dangxem");
            this.classList.remove(
              nutNao === "nutTrai" ? "bienMatKhiAnPrev" : "bienMatKhiAnNext"
            );
    
            trangThaiCua2ChuyenDong++; // = 1
            trangThai = trangThaiCua2ChuyenDong === 2 ? 'dangDungYen' : trangThai;
        }

        var xuLyTiepTheoKetThucCD = function (){
            console.log('slide tiep theo da xong roi do');
            console.log(this);
            
            this.classList.add('dangxem');
            this.classList.remove(
              nutNao === "nutTrai" ? "diVaoKhiAnPrev" : "diVaoKhiAnNext"
            );

            trangThaiCua2ChuyenDong++; // = 2
            trangThai = trangThaiCua2ChuyenDong === 2 ? "dangDungYen" : trangThai;
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

    nutPhai.addEventListener('click', function(){
        xacDinh2SlideVaChuyenDong("nutPhai");
    });

    nutTrai.addEventListener('click', function(){
        xacDinh2SlideVaChuyenDong("nutTrai");
    });

},false);

