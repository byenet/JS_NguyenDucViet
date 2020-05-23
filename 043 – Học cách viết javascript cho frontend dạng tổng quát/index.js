document.addEventListener('DOMContentLoaded',function (){
    // dung id
    var nutID = document.getElementById('n1');
    nutID.onclick = function(){
        // console.log('lick');
        var matKhauID = nutID.getAttribute('data-matkhauID')
        console.log(matKhauID);
    }

    // dung class 
    var nutClass = document.getElementsByClassName("nuttongquat");
    for (var i = 0; i< nutClass.length; i++){
        nutClass[i].onclick = function (){
            // console.log('click');
            var matKhauClass = this.getAttribute('data-matkhauClass');
            console.log(matKhauClass);
            
        }
    }


}, false);
