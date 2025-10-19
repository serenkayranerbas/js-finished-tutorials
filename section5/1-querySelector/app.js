// const error=document.querySelector('p');//ilk p etiketini seçer
// const error=document.querySelector('.error');
// const error=document.querySelector('div.error');
// console.log(error);

const errors=document.querySelectorAll('p');
// console.log(errors);
console.log(errors[0]);

errors.forEach(error=>{
    console.log(error);
})