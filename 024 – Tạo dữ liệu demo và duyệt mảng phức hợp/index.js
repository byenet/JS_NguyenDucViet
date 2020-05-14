// Gia lap mang du lieu nhu thong qua API
var mangDL = [
  {
    id: 1,
    ten: 'mot',
    anh:
      "https://kenh14cdn.com/thumb_w/250/2020/5/14/800-500-1589449403477342274289-crop-1589449427819588817818.png",
    noiDung:
      'Nam chính cực hot vào vai vua Bảo Đại trong MV mới của Hoà Minzy: Cao 1m8 với body phát mê, từng được Minh Hằng "cưng" hết mức',
  },
  {
    id: 2,
    ten: 'hai',
    anh:
      "https://kenh14cdn.com/thumb_w/250/2020/5/14/collage-15894591156912082502396-crop-15894591201431743631689.jpg",
    noiDung:
      "Lynk Lee tung bộ ảnh đẹp lung linh, còn được cả Jun Vũ hỗ trợ stylist đâu ra đấy: Xinh thế này thì ai làm lại!",
  },
];  


for (var i = 0; i < mangDL.length; i++){
    var noiDung1Khoi = `
        <div class="kcm" id="kcm-${mangDL[i].id}">
            <img src="${mangDL[i].anh}" alt="" class="float-xs-left pr-1">
            <b>${mangDL[i].ten}</b>
            <span>${mangDL[i].noiDung}</span>
        </div>
    `

    document.write(noiDung1Khoi);
}

