// anonymous function

var z = function tbc(x,y){
    return (x+y)/2;
}

console.log(z(2,4));


// closure function

function chao(){
    var ten = 'huy nhat';

    var thongBao = function(){
        console.log("cafe khong ha "+ ten);
    }

    ten = ten + ' - Dep trai';
    return thongBao;

    ten = ten + " - Khong dep trai";
}

var h = chao(); // h luc nay la 1 ham anonymous

h();