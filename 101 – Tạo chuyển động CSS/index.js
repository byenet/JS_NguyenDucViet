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
    
    // 1. xac dinh slide hien tai va slide tiep theo khi click nut

    // goi su kien click vao nut
    var chuyenSlideChoNutPhai = function(){
        // console.log('click phai');

        // kiem tra luon trang thai
        if(trangThai === 'dangChuyenDong') {
            // dung chuong trinh
            return false;
        }

        // den dong nay tuc la dang dung yen, xu ly chuyen dong
        // danh dau la dang chuyen dong
        trangThai = 'dangChuyenDong'
        var trangThaiCua2ChuyenDong = 0;

        var phanTuHienTai = slides[chiSoHienTai];
        // Xac dinh chi so cua phan tu tiep theo dua tren phan tu hien tai
        if(chiSoHienTai < soLuongSlide - 1 ){ // chua den cuoi
            chiSoHienTai += 1;
        }else{ // la phan tu cuoi cung roi
            chiSoHienTai = 0;
        }

        var phanTuTiepTheo = slides[chiSoHienTai];
        console.log('hien tai');
        console.log(phanTuHienTai);
        console.log('tieptheo');
        console.log(phanTuTiepTheo);

        // Tao chuyen dong sau khi xac dinh duoc 2 phan tu

        var xuLyHienTaiKetThucCD = function (){
            console.log('slide hien tai da xong roi do');
            console.log(this);
            
            this.classList.remove("dangxem");
            this.classList.remove('bienMatKhiAnNext');

            trangThaiCua2ChuyenDong++; // = 1
            if(trangThaiCua2ChuyenDong === 2){
                trangThai = 'dangDungYen';
            }
        }

        var xuLyTiepTheoKetThucCD = function (){
            console.log('slide tiep theo da xong roi do');
            console.log(this);
            
            this.classList.remove('diVaoKhiAnNext');
            this.classList.add('dangxem');

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

        phanTuHienTai.classList.add("bienMatKhiAnNext");
        phanTuTiepTheo.classList.add("diVaoKhiAnNext");

    };

    nutPhai.addEventListener('click', chuyenSlideChoNutPhai);
    // Xong nut phai

    // Xu ly cho nut trai

    var chuyenSlideChoNutTrai = function (){
        // console.log('click trai');

        //1- xac dinh duoc 2 phan, hien tai va tiep theo
        // phan tu hien tai
        var phanTuHienTai = slides[chiSoHienTai];
        // Phan tu tiep theo
        if(chiSoHienTai > 0){
            chiSoHienTai--;
        }else{
            // dang o phan tu dau tien, ko lui duoc nua thi cho chuyen sang phan tu cuoi cung
            chiSoHienTai = soLuongSlide-1;
        }

        var phanTuTiepTheo = slides[chiSoHienTai];

        console.log('hien tai');
        console.log(phanTuHienTai);
        console.log('tiep theo');
        console.log(phanTuTiepTheo);
        

        phanTuHienTai.classList.add("bienMatKhiAnPrev");
        phanTuTiepTheo.classList.add("diVaoKhiAnPrev");
        
    }
    nutTrai.addEventListener('click', chuyenSlideChoNutTrai);

},false);

