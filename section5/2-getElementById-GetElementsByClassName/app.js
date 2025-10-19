const baslik=document.getElementById('can');
console.log(baslik);

const errors=document.getElementsByClassName('error');
console.log(errors[0]);

// errors.forEach(error=>{
//     console.log(error);
// })
//html collection foreach içerisinde kullanılmıyor.
//nodelist i collection foreach içerisinde kullanılıyor.

const pEtiketleri=document.getElementsByTagName('p');
console.log(pEtiketleri[1]);