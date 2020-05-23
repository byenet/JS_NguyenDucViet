document.addEventListener('DOMContentLoaded',function (){
    var trangThai = 'duoi300';

    //lay ve menu
    var doiTuongMenu = document.querySelector('.menu');
    // console.log(doiTuongMenu);
    

    // bat su kien cuon chuot
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 300){
            if(trangThai === 'duoi300'){
                // console.log("lon hon 300 roi");
                trangThai = 'tren300';

                doiTuongMenu.classList.add('nholai');
            }
        }
        else{
            if(trangThai === 'tren300'){
                doiTuongMenu.classList.remove('nholai');
                trangThai = 'duoi300'
            }
        }
    })

}, false);