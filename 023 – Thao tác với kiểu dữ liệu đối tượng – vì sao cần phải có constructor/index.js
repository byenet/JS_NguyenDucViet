var cacMonAn = {
    ten: 'Thit kho tau',
    nguyenLieu: 'thit lon',
    gia: 200
};

// Khai bao constructor

function monAn(t, nl, g){
    this.ten = t;
    this.nguyenLieu = nl;
    this.gia = g;
}

var mon1 = new monAn('Rau xao', 'Rau muong', 900);
var mon2 = new monAn('Dau rung', 'Dau phu', 400);
console.log(mon1);
console.log(mon2);

