const button=document.querySelector('button');

// button.addEventListener('click',()=>{
//   console.log("Tıklandı");
// });

const liElements=document.querySelectorAll('li');
// liElements.forEach(element=>{

//   element.addEventListener('click',e=>{
//     console.log(e);
//     console.log(e.target);
//     console.log("Li'ye tıklandı");
//     e.target.style.color='blue';
//   })
// })

const ul=document.querySelector('ul');
// ul.remove();

// liElements.forEach(element=>{

//   element.addEventListener('click',e=>{
//     e.target.remove();
//   })
// })




button.addEventListener('click',()=>{
  const li =document.createElement('li');
  li.textContent='Javascript';

  // ul.append(li);
  ul.prepend(li);
});

liElements.forEach(element=>{
   element.addEventListener('click',e=>{
    // e.target.remove();
    e.target.style.fontSize='20px';
   })
})