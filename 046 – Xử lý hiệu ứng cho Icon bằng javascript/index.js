
document.addEventListener('DOMContentLoaded',function() {
    // bien su dung .declick
    var nut = document.getElementsByClassName('declick');
    for (var i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            this.classList.toggle('mautrang');
        }
    }
}, false);