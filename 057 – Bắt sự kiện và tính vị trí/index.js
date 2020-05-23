document.addEventListener("DOMContentLoaded",function(){
    var trangThai = "duoi300";
    // Bat su kien khi nguoi dung scroll
    window.addEventListener('scroll',function(){
        // console.log('dang cuon chuot');

        // vi tri nguoi dung cuon toi (in ra gia tri dang o theo chieu y (theo pixel))
        console.log(window.pageYOffset);
        
        // vi du dung if
        if (window.pageYOffset > 300) {
            if (trangThai === 'duoi300') {
                console.log("dang o vi tri lon hon 300px!");
                trangThai = 'tren300'
            }
        } else{
            trangThai = 'duoi300';
        }
    })
    
},false)