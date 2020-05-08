var hocVien = {
    ten: 'Huy',
    tuoi: 21,
    diemToan: 9,
    diemHoa: 8,
    diemLy: 7,
    chieuCao: 165
}

console.log(hocVien.ten);
console.log(hocVien['ten']);
console.log('-----------------------');

for (var x in hocVien) {
  console.log(hocVien.x);
}

for ( var x in hocVien){
    console.log(hocVien[x]);
}