document.addEventListener('DOMContentLoaded',function (){
    var nutBT = document.getElementById('nutHieuUngBT');
    var trangThaiBT = 'lan1';
    nutBT.onclick = function(){
        if(trangThaiBT === 'lan1'){
            console.log("Click BT lan 1");
            trangThaiBT = 'lan2';

            // xu ly code cho viec hieu ung lan 1

        } else if(trangThaiBT === 'lan2'){
            console.log("Click BT lan 2");
            trangThaiBT = 'lan1';

            // xu ly code cho viec hieu ung lan 2

        }
    }

    var nutTF = document.getElementById('nutHieuUngTF');
    var trangThaiTF = false;

    nutTF.onclick = function (){
        if(trangThaiTF === false){
            console.log('click TF lan 1');
            trangThaiTF = true;
        } else {
            console.log('click TF lan 2');
            trangThaiTF = false;
        }
    }
    


},false);