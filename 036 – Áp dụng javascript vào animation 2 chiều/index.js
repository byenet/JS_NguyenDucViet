document.addEventListener('DOMContentLoaded',function (){
    var nutBT = document.getElementById('nutHieuUngBT');
    var khoi = document.getElementById('kcd');
    var trangThaiBT = 'lan1';
    nutBT.onclick = function(){
        if(trangThaiBT === 'lan1'){
            console.log("Click BT lan 1");
            trangThaiBT = 'lan2';

            // xu ly code cho viec hieu ung lan 1
            khoi.classList.remove('khongChuyenDong')
            khoi.classList.add("chuyeuSo1");

        } else if(trangThaiBT === 'lan2'){
            console.log("Click BT lan 2");
            trangThaiBT = 'lan1';

            // xu ly code cho viec hieu ung lan 2
            khoi.classList.remove('chuyeuSo1');

        }
    }


},false);