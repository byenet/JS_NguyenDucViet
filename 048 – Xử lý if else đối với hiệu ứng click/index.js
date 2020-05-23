document.addEventListener('DOMContentLoaded',function() {
    // bien su dung .declick
    var nut = document.getElementsByClassName('declick');
    var nd = document.getElementsByClassName('dehienthi');
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){

            // click vao cai da hien thi roi
            if(this.classList[1] === 'mautrang'){
                // Xu ly 1 kieu
                this.classList.remove('mautrang')

                var ndHienRa = this.getAttribute('data-hienlen');
                var phanTuHienRa = document.getElementById(ndHienRa);
                // cho div cua doi tuong dc click hien thi ra
                phanTuHienRa.classList.remove('ra');

            }
            // click vao cai con lai
            else {
                for (var j = 0; j<nut.length; j++) {    
                nut[j].classList.remove('mautrang');
                }

                //  doi tuong duoc click (this) thanh mau trang
                this.classList.toggle('mautrang');

                //lay ve cai data-hienlen
                // console.log(this.getAttribute('data-hienlen'));
                var ndHienRa = this.getAttribute('data-hienlen');
                var phanTuHienRa = document.getElementById(ndHienRa);
                // console.log(phanTuHienRa);

                //  cho tat ca cac div .dehienthi khac an di
                for (var i = 0; i < nd.length; i++) {      
                    nd[i].classList.remove("ra");
                }

                // cho div cua doi tuong dc click hien thi ra
                phanTuHienRa.classList.toggle('ra');
            }
        }
    }
}, false);

