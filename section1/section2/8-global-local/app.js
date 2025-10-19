let yas=29;
//var ile tanımlanna globalde geçerli
//let localde geçerli
if(true){
  let yas=60;//let block scope tur
  console.log("İçerideki:" ,yas);
  if(true){
    let yas=50;
    let name="Can";
    var contest="Hobaa";
    console.log("İçeridekinin içindeki:",yas,name,contest);
  }
}

console.log("Dışardaki",yas,name,contest);


//en dışta tanımladığımız globalde geçerli.
//diğer let ler tanımlanmış olduğu block scopelar içerisinde geçerli.