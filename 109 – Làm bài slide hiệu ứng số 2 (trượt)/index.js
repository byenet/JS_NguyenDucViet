document.addEventListener('DOMContentLoaded',function (){

    var nutPhai = document.querySelector('.nuts b.phai');
    var nutTrai = document.querySelector('.nuts b.trai');
    var slides = document.querySelectorAll('.slides ul li');
    var chiSoHienTai = 0;
    var soLuongSlide = slides.length;
    var trangThai = 'dangDungYen';

    function xacDinh2SlideVaChuyenDong(nutNao){
        if(trangThai === 'dangChuyenDong') {
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

        phanTuHienTai.classList.add(
          nutNao === "nutTrai" ? "bienMatKhiAnPrev" : "bienMatKhiAnNext"
        );

        phanTuTiepTheo.classList.add(
          nutNao === "nutTrai" ? "diVaoKhiAnPrev" : "diVaoKhiAnNext"
        );
    }

    nutPhai.addEventListener('click', function(){
        xacDinh2SlideVaChuyenDong("nutPhai");
    });

    nutTrai.addEventListener('click', function(){
        xacDinh2SlideVaChuyenDong("nutTrai");
    });

},false);

