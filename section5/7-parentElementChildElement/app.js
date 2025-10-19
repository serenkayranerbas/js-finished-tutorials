const section = document.querySelector("section");
console.log(section.children);
console.log(Array.from(section.children));
//html collection foreach kullanılmaz.
//Array from ekleyip forEach i kullanabildik.
Array.from(section.children).forEach((child) => {
  child.classList.add("section-element");
});

const title=document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

console.log(title.nextElementSibling.parentElement.children);












