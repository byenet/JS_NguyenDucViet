document.addEventListener("DOMContentLoaded",function (){
    // khai bao bien can su dung trong app nay
    var tg = document.getElementsByClassName('tamGiac');
    var tamGiac = tg[0];
    var ds = document.getElementsByClassName('danhSach');
    var danhSach = ds[0];

    // su dung ham onclick va toggle class cho tam giac doi mau
    tamGiac.onclick = function(){
        // this.style.color = 'white';
        this.classList.toggle('tamGiacTrang')
    }
    
},false);