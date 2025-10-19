let nameSurname="Seren Kayran Erbaş";
let last=nameSurname.lastIndexOf('n');
console.log(last);

//indexOf → ilk eşleşmeyi bulur.
//lastIndexOf → son eşleşmeyi bulur.


//slice başlangıç ve bitiş index i veriyorsunuz


let bastanSona=nameSurname.slice(0,5); //başlangıç index,bitiş indexi
console.log(bastanSona);



let bastanSonaSubstr=nameSurname.substr(5,5); //5.indexten başlasın 5.indexten sonra 5 index gitsin
console.log(bastanSonaSubstr);

let replace=nameSurname.replaceAll('n','w'); //yer değiştirme
console.log(replace);