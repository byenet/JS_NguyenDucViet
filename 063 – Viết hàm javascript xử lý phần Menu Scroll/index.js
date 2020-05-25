document.addEventListener('DOMContentLoaded',function (){
    // khai bao bien can dung 
    var menuDo = document.querySelector('.menu');
    // console.log(menuDo);
    var trangThaiMenuDo = 'duoi100'; // duoi banner

    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);

        if(window.pageYOffset > 100){
            if(trangThaiMenuDo == 'duoi100'){
                trangThaiMenuDo = 'tren100';
                menuDo.classList.add('menuden');
            }
        } else {
             if (trangThaiMenuDo == "tren100") {
               trangThaiMenuDo = "duoi100";
               menuDo.classList.remove("menuden");
             }
        }
    })
    
},false);
