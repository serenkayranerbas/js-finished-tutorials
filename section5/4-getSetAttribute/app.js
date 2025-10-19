const link=document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','http://wwww.boztraining.com');
link.textContent='Boz Training';


const pDegeri=document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class','error');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('style','color:red');
