var cacTieuDe = document.getElementsByTagName('h4');
console.log(cacTieuDe);

for (var i = 0; i < cacTieuDe.length; i++){
    if(i%2 === 0)
    {
        cacTieuDe[i].innerHTML = "<button class='btn btn-info btn-block'> Huy dep trai</button>"
    }
}

