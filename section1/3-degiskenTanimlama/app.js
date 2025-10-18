let gun = 14;
let ay = 7;
let yil = 1992;

console.log(gun, ay, yil);
console.log(
  "Seren Kayran " + gun + "/" + ay + "/" + yil + " tarihinde doğmuştur."
);
gun = 29;
console.log(gun);

/*

var : function scope -- ram bellekte çok fazla yer kaplar.
let : block scope -- ram bellekte az yer kaplar.
const : block scope -- ram bellekte az yer kaplar. Sabit değişkenler için kullanılır.   
let ve const ile aynı değişken ismiyle yeniden tanımlama yapılamaz.
let ve const sadece bulundukları kıvırcık parantezler içinden erişilebilen değişkenlerdir.









var: Aynı isimle yeniden tanımlanabilir ve değeri değiştirilebilir.
let: Aynı isimle aynı kapsam içinde yeniden tanımlanamaz, ama değeri değiştirilebilir.
const: Ne yeniden tanımlanabilir ne de değeri değiştirilebilir. (Ama referans tiplerde içerik değişebilir.)
*/

var arabafiyati = 1300000;
arabafiyati = 902222222;
var arabafiyati = 77777;
console.log(arabafiyati);

const sifiraraba = 2500000;
sifiraraba = 900000;
console.log(sifiraraba);
