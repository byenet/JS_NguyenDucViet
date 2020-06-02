document.addEventListener('DOMContentLoaded',function (){

    // bien dung chung
    var nutPhai = document.querySelector('.nuts b.phai');
    // console.log(nutPhai);
    var nutTrai = document.querySelector('.nuts b.trai');
    // console.log(nutTrai);
    var slides = document.querySelectorAll('.slides ul li');
    // console.log(slides);
    var chiSoHienTai = 0;
    soLuongSlide = slides.length;
    // console.log(soLuongSlide);
    
    // 1. xac dinh slide hien tai va slide tiep theo khi click nut

    // goi su kien click vao nut
    var chuyenSlideChoNutPhai = function(){
        // console.log('click phai');
        var phanTuHienTai = slides[chiSoHienTai];
        // Xac dinh chi so cua phan tu tiep theo dua tren phan tu hien tai
        if(chiSoHienTai < soLuongSlide - 1 ){ // chua den cuoi
            chiSoHienTai+=1;
        }else{ // la phan tu cuoi cung roi
            chiSoHienTai = 0;
        }

        var phanTuTiepTheo = slides[chiSoHienTai]
        // console.log(phanTuHienTai);
        // console.log(phanTuTiepTheo);

        var xuLyHienTaiKetThucCD = function (){
            console.log('slide hien tai da xong roi do');
            this.classList.remove('dangxem');
            this.classList.remove('bienMatKhiAnNext')
        }

       

        var xuLyTiepTheoKetThucCD = function (){
            console.log('slide tiep theo da xong roi do');
            this.classList.remove('diVaoKhiAnNexts')
            this.classList.add('dangxem')
        }

        phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD);

        phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucCD);


        // Tao chuyen dong sau khi xac dinh duoc 2 phan tu
        phanTuHienTai.classList.add('bienMatKhiAnNext');
        phanTuTiepTheo.classList.add('diVaoKhiAnNext');

    };

    nutPhai.addEventListener('click', chuyenSlideChoNutPhai);

},false);

