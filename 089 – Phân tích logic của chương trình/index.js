document.addEventListener('DOMContentLoaded',function (){

    // bien dung chung
    var nutPhai = document.querySelector('.nuts b.phai');
    // console.log(nutPhai);
    var nutTrai = document.querySelector('.nuts b.trai');
    // console.log(nutTrai);

    // 1. xac dinh slide hien tai va slide tiep theo khi click nut

    // goi su kien click vao nut
    var chuyenSlideChoNutPhai = function(){
        console.log('click phai');
    };

    nutPhai.addEventListener('click', chuyenSlideChoNutPhai);

},false);

