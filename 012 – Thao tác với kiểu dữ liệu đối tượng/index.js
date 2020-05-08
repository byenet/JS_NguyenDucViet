var hocVien = {
    ten: 'Huy',
    ho: 'Nguyen',
    tuoi: 21,
    chieuCao: 165,
    canNang: 70,

    tenDayDu: function(){
        return this.ho + " " + this.ten;
    },
    danhGia: function(){
        if(this.chieuCao/this.canNang < 3){
            return "dep trai";
        }else {
            return "hoi gay";
        }
    }
}

console.log('tuoi hoc vien: ' + hocVien.tuoi);

console.log(hocVien.tenDayDu());
console.log(hocVien.danhGia());

