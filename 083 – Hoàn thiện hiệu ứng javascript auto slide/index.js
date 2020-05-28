document.addEventListener("DOMContentLoaded",function (){
    // khai bao bien
    var nut = document.querySelectorAll('.chuyenslide ul li')
    // console.log(nut);
    // nut tra ve 1 mang nut

    var slides = document.querySelectorAll('.cacslide ul li');
    // console.log(slides);
    

    // bat su kien click cho tung nut
    for(var i = 0; i < nut.length; i++){
        nut[i].addEventListener("click",function(){
            // console.log(this);
            // bo tat ca kichhoat di
            for(var j = 0; j < nut.length; j++){
                nut[j].classList.remove('kichhoat');
            }
            this.classList.add("kichhoat");

            // Xu ly phan tinh vi tri
            // in ra phan tu truoc no
            // console.log(this.previousElementSibling);

            var nutKichHoat = this;
            var viTriNut = 0;
            for ( viTriNut;nutKichHoat = nutKichHoat.previousElementSibling; viTriNut++) {
                // console.log('bien chay nut kich hoat truoc do = '+viTriNut);
            }
            // vong lap nay de lay bien i = so thu tu

            // console.log('vi tri cua phan thu co class la kich hoat la = '+ viTriNut);

            // Buoc 1: cho tat ca slide an di = cach remove class active
            for (var i = 0; i< slides.length; i++){
                slides[i].classList.remove('active');
                slides[viTriNut].classList.add('active');
            }

        })
    } // he su kien cho nut

    // Viet ham tu chuyen slide

    // thuc thi ham
    autoSLide();

    // viet ham
    function autoSLide() {
        setInterval(function () {
            // buoc 1: xem slide nao dang hien thi
            var viTriSlide = 0;
            var slideHienTai = document.querySelector('.cacslide ul li.active');
            // console.log(slideHienTai);
            // console.log(slideHienTai.previousElementSibling);
            
            for (viTriSlide; slideHienTai = slideHienTai.previousElementSibling; viTriSlide++){ 
            }
            // console.log('vi tri slide hien tai la: '+ viTriSlide);

            // neu ma chua den slide cuoi cung tuc la viTriSlide <= slides.length --> thi hoat dong binh thuong
            if (viTriSlide < (slides.length)-1){
                    // cho an het di
                for (var i = 0; i < slides.length; i++){
                    slides[i].classList.remove('active');
                    nut[i].classList.remove('kichhoat');
                }
                // cho phan tu tiep theo cua slide hien thi ra
                slides[viTriSlide].nextElementSibling.classList.add('active');
                nut[viTriSlide].nextElementSibling.classList.add('kichhoat')
            } else {
                 // cho an het di
                for (var i = 0; i < slides.length; i++){
                    slides[i].classList.remove('active');
                    nut[i].classList.remove('kichhoat');
                }
                slides[0].classList.add("active");
                nut[0].classList.add("kichhoat");
            }

        }, 5000)
    }


},false);