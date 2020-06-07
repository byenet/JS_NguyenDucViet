addEventListener('DOMContentLoaded',function() {
    // console.log('Da chay roi');
    var anhs = document.querySelectorAll('.cacAnh img');
    // console.log(anh);

    for (var i = 0; i < anhs.length; i++) {
        anhs[i].addEventListener('click', function(){
            // console.log('ban vua click vao anh');
            console.log(this)
        })
    }
    
}, false);