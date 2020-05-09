var x = 'iphone, android, nokia, blackberry, samsung';

console.log(x.length);

// ham indexOf tuong tu serch()
// neu co iphone trong x, thi tra ve vi tri cua tu do 
// neu khong tim thay tra ve la -1
var vitri = x.indexOf('iphone');

if(vitri != -1){
    console.log('tim thay');
    var moi = x.replace('iphone','sony')
    console.log(moi);
    
}else{
    console.log('Khong tim thay');
}

var mang = x.split(',');
console.log(mang);

for (var i=0; i< mang.length; i++){
    console.log(mang[i]);
}

for (var x in mang){
    console.log(mang[x]);
}