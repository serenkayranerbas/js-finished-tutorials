console.log(Math);
console.log(Math.PI);

let number=5.3;
console.log(Math.round(number));
/*en yakı sayıya yuvarlar. noktadan sonraki kısım 5.7 6 ya mı 5 e mi 
daha yakın hangisine yakınsa onu yazar.*/
console.log(Math.floor(number));//sayıyı 1 alta yuvarlar
console.log(Math.ceil(number));//sayıyı 1 üste yuvarlar
console.log(Math.trunc(number));//decimal kısmı kaldırır. ".3 " kısmını 3 ü kaldırır.

const rastgele=Math.random();//0 ve 1 arasında random değer üretiyor.

console.log(rastgele);
console.log(Math.round(rastgele*100));//sayıyı 0-100 arasında değer elde etmek istersek
