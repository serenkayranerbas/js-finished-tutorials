// const pdegeri=document.querySelector('p');
// console.log(pdegeri.innerText);
// pdegeri.innerText='Can Box fullstack Developer';

// const pdegeri = document.querySelectorAll("p");
// pdegeri.forEach((a) => {
//   console.log(a.innerText);
//   a.innerText += " yeni alan";
// });

const content=document.querySelector('.content');
console.log(content.innerText);

// content.innerHTML='<h2>Vue JS, React JS,Angular JS</h2>';

content.innerHTML +='<h2>Vue JS, React JS,Angular JS</h2>';

const students=['Can','Cansu','Elif'];
students.forEach(student=>{
   content.innerHTML+=`<p>${student}</p>`;
})