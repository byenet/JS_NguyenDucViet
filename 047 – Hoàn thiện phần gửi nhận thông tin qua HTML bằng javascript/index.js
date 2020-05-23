
document.addEventListener('DOMContentLoaded',function() {
    // bien su dung .declick
    var nut = document.getElementsByClassName('declick');
    var nd = document.getElementsByClassName('dehienthi');
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            for (var j = 0; j<nut.length; j++) {
                
                if(nut[j] !== this)
                nut[j].classList.remove('mautrang');
            }

            this.classList.toggle('mautrang');

            //lay ve cai data-hienlen
            // console.log(this.getAttribute('data-hienlen'));
            var ndHienRa = this.getAttribute('data-hienlen');
            var phanTuHienRa = document.getElementById(ndHienRa);
            // console.log(phanTuHienRa);

            for (var i = 0; i < nd.length; i++) {      
                if(nd[i]!==phanTuHienRa)
                nd[i].classList.remove("ra");
            }

            phanTuHienRa.classList.toggle('ra');
        }
    }
}, false);