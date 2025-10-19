const framework1='Angular';
const framework2='React';
const framework3='Vue';

// template literal (`...`) ve string interpolation (${...})

let sonuc='Can boz un bildigiği js frameworkleri : ' + framework1+ ' '+framework2+' '+framework3;
console.log(sonuc);

let sonuc1= `Can boz un bildigiği js frameworkleri : ${framework1} ${framework2} ${framework3}`;
console.log(sonuc1);

let html=`
<h1>${framework1}</h1>
<h1>${framework2}</h1>
<h1>${framework3}</h1>
`;
console.log(html);