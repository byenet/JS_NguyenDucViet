document.addEventListener("DOMContentLoaded",function (){
    // khai bao bien
    var nut = document.querySelectorAll('.chuyenslide ul li')
    // console.log(nut);
    // nut tra ve 1 mang nut

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
            console.log(this.previousElementSibling);
            var nutKichHoat = this;
            var viTriNut = 0;
            for ( viTriNut;nutKichHoat = nutKichHoat.previousElementSibling; viTriNut++) {
                console.log('bien chay nut kich hoat truoc do = '+viTriNut);
            }
            // vong lap nay de lay bien i = so thu tu

            console.log('vi tri cua phan thu co class la kich hoat la = '+ viTriNut);
        })
    }
    
},false);